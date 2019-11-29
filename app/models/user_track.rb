class UserTrack < ApplicationRecord
  belongs_to :user
  belongs_to :track

  validates_uniqueness_of :track_id, scope: :user_id, message: "has already been liked"
end
