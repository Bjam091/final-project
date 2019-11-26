class UsersController < ApplicationController

  def authorize
    @client = SpotifyService.authorize
    redirect_to @client
  end

  def callback
    if (!!request.query_string)
      SpotifyService.fetch_tokens(request.query_string) #query string contains "code" 
    end
  end

  def current_track
    @current_track = User.get_current_track
  end

  def recently_played
    @recently_played = User.get_recently_played
  end
end