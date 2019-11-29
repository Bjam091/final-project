class ChangeColumnActiveSongToTrackId < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :active_song, :track_id
  end
end
