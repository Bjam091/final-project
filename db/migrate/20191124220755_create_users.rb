class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :spotify_uuid
      t.string :spotify_username
      t.string :latitude
      t.string :longitude
      t.integer :active_song

      t.timestamps
    end
  end
end
