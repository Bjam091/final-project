class CreateUserTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :user_tracks do |t|
      t.integer :user_id
      t.integer :track_id

      t.timestamps
    end
  end
end
