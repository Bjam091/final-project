class User < ApplicationRecord
  reverse_geocoded_by :latitude, :longitude
  belongs_to :track, optional: true
  has_many :user_tracks
  has_many :tracks, through: :user_tracks

  class << self
    def update_persist_user tokens, response
      @display_name = response["display_name"]
      @access_token = tokens["access_token"]
      @refresh_token = tokens["refresh_token"]

      @user = self.find_or_create_by(spotify_username: @display_name)
      if @refresh_token.present?
        @user.update_attributes(access_token: @access_token, refresh_token: @refresh_token, access_token_expires_at: Time.now + 1.hour)
      else
        @user.update_attributes(access_token: @access_token, access_token_expires_at: Time.now + 1.hour)
      end
    end

    def get_current_track current_user
      @user = current_user
      @access_token = @user.access_token

      @response = HTTParty.get('https://api.spotify.com/v1/me/player/currently-playing', headers: {"Authorization": "Bearer #{@access_token}"})
      @track = Track.find_or_create_track(@response)
      @user.update_attribute(:track_id, @track.try(:id))
      @track
    end

    def get_recently_played user
      @user = User.find(user) #current_user will be passed in user id/ find user
      return if @user.blank?
      return if @user.access_token.blank?
      @access_token = @user.access_token

      @response = HTTParty.get('https://api.spotify.com/v1/me/player/recently-played?limit=10', headers: {"Authorization": "Bearer #{@access_token}"})
      return @response if @response["items"].blank?
      @tracks = []
      @response["items"].each do |item|
        track = {
          spotify_uuid: item["track"]["id"],
          title: item["track"]["name"],
          artist: item["track"]["artists"][0]["name"],
          album_art_url: item["track"]["album"]["images"][0]["url"],
          preview_url: item["track"]["preview_url"],
          spotify_url: item["track"]["external_urls"]["spotify"]
        }

        @tracks << track
      end
      @tracks
    end

    def nearby_users latitude, longitude
      @nearby = User.near([latitude, longitude], 1, units: :km)
      @nearby
    end

    def from_token_request request
      username = request.params["auth"] && request.params["auth"]["username"]
      self.find_by spotify_username: username
    end
  end

  def authenticate password
    return self
  end
end
