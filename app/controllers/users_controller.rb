class UsersController < ApplicationController
  include Knock::Authenticable

  def authorize
    @client = SpotifyService.authorize
    redirect_to @client
  end

  def callback
    if (!!request.query_string)
      SpotifyService.fetch_tokens(request.query_string) #query string contains "code" 
    end
    render json: "Authorized", status: 200
  end

  def current
    current_user.update!(last_login: Time.now)
    render json: current_user
  end

  def current_track
    track = User.get_current_track(current_user)
    render json: track
  end

  def nearby
    latitude = params[:latitude]
    longitude = params[:longitude]
    nearby = User.nearby_users(latitude, longitude)
    render json: nearby, :include => :track
  end

  def recently_played
    tracks = User.get_recently_played(current_user)
    render json: tracks
  end
end
