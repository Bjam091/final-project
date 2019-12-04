class UsersController < ApplicationController
  include Knock::Authenticable

  def authorize
    @client = SpotifyService.authorize
    redirect_to @client
  end

  def callback
    if (!!request.query_string)
      @res = SpotifyService.fetch_tokens(request.query_string) #query string contains "code"
    end
    redirect_to "http://192.168.88.23:3000/auth?user=#{@res["display_name"]}"
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
    tracks = User.get_recently_played(params[:id])
    render json: tracks
  end

  def update_coords
    latitude = params["coords"]["latitude"]
    longitude = params["coords"]["longitude"]
    user_id = params[:user_id]
    user = User.find(user_id)
    user.update_attributes(latitude: latitude, longitude: longitude)
    render json: user
  end
end
