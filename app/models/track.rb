class Track < ApplicationRecord
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
  end
end
