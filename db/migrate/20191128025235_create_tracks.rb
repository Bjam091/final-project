class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :spotify_uuid
      t.string :title
      t.string :artist
      t.string :album_art_url
      t.string :preview_url
      t.string :spotify_url

      t.timestamps
    end
  end
end
