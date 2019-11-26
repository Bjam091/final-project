require 'HTTParty'
class User < ApplicationRecord

  class << self
    def update_persist_user tokens, response
      binding.pry

      @display_name = response["display_name"]
      @access_token = tokens["access_token"]
      @refresh_token = tokens["refresh_token"]

      @user = self.find_or_create_by(spotify_username: @display_name)
      @user.update_attributes(access_token: @access_token, refresh_token: @refresh_token)
    end

    def get_current_track
      @user = self.find(1)
      @access_token = @user.access_token
  
      @response = HTTParty.get('https://api.spotify.com/v1/me/player/currently-playing', headers: {"Authorization": "Bearer #{@access_token}"})
  
      binding.pry
    end

    def get_recently_played
      @user = self.find(1)
      @access_token = @user.access_token

      @response = HTTParty.get('https://api.spotify.com/v1/me/player/recently-played?limit=10', headers: {"Authorization": "Bearer #{@access_token}"})

      binding.pry
    end
  end
end
