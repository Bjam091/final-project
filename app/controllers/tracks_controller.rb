class TracksController < ApplicationController
  include Knock::Authenticable

  def index
    tracks = Track.all
    render json: tracks
  end

  def liked_count
    track = Track.liked_tracks_count(params[:id])
    render json: track
  end

  def like_track
    user_id = params[:user_id]
    user = User.find(user_id)
    track = Track.like_track(user, params[:id])
    render json: track
  end

  def unlike_track
    user_id = params[:user_id]
    user = User.find(user_id)
    track = Track.unlike_track(user, params[:id])
    render json: track
  end

  def liked_tracks
    user_id = params[:user_id]
    user = User.find(user_id)
    tracks = user.tracks
    render json: tracks
  end
end
