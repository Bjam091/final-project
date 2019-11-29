class User < ApplicationRecord
  reverse_geocoded_by :latitude, :longitude
  belongs_to :track, optional: true
  #has_and_belongs_to_many :tracks
  has_many :user_tracks
  has_many :tracks, through: :user_tracks

  class << self
    def update_persist_user tokens, response
      #binding.pry

      @display_name = response["display_name"]
      @access_token = tokens["access_token"]
      @refresh_token = tokens["refresh_token"]

      @user = self.find_or_create_by(spotify_username: @display_name)
      @user.update_attributes(access_token: @access_token, refresh_token: @refresh_token)
    end

    def get_current_track current_user
      @user = current_user
      @access_token = @user.access_token

      @response = HTTParty.get('https://api.spotify.com/v1/me/player/currently-playing', headers: {"Authorization": "Bearer #{@access_token}"})
      # binding.pry
      @track = Track.find_or_create_track(@response)
      @user.update_attribute(:track_id, @track.try(:id))
      @track
    end

    def get_recently_played current_user
      @user = current_user
      @access_token = @user.access_token

      @response = HTTParty.get('https://api.spotify.com/v1/me/player/recently-played?limit=10', headers: {"Authorization": "Bearer #{@access_token}"})
      @response
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
