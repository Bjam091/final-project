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
    track = Track.like_track(current_user, params[:id])
    render json: track
  end

  def unlike_track
    track = Track.unlike_track(current_user, params[:id])
    render json: track
  end

  def liked_tracks
    tracks = current_user.tracks
    render json: tracks
  end
end
