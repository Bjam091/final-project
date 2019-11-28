class User < ApplicationRecord

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
      @track = Track.find_or_create_track(@response)
      @user.update_attribute(:active_song, @track.try(:id))
      @response
    end

    def get_recently_played current_user
      @user = current_user
      @access_token = @user.access_token

      @response = HTTParty.get('https://api.spotify.com/v1/me/player/recently-played?limit=10', headers: {"Authorization": "Bearer #{@access_token}"})

      binding.pry
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
