class Track < ApplicationRecord
  # has_many :users
  #has_and_belongs_to_many :users
  has_many :user_tracks
  has_many :users, through: :user_tracks

  class << self
    def find_or_create_track track
      return if !track["item"]

      id = track["item"]["id"]
      artist_name = track["item"]["artists"][0]["name"]
      album_art_url = track["item"]["album"]["images"][0]["url"]
      song_name = track["item"]["name"]
      preview_url = track["item"]["preview_url"]
      spotify_url = track["item"]["external_urls"]["spotify"]

      self.create_with(spotify_uuid: id, title: song_name, artist: artist_name, album_art_url: album_art_url,
      preview_url: preview_url, spotify_url: spotify_url).find_or_create_by(spotify_uuid: id)
    end

    def liked_tracks_count track_id
      track = Track.find(track_id)
      return track.users.count
    end

    def like_track current_user, track_id
      track = Track.find(track_id)
      current_user.tracks << track
      return track
    end

    def unlike_track current_user, track_id
      track = UserTrack.find_by(user_id: current_user.id, track_id: track_id)
      track.destroy
    end
  end
end
