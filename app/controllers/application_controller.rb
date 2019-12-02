# ApplicationController < ActionController::API
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :validate_spotify_token

  def validate_spotify_token
    return if current_user === nil
    return if current_user.try(:access_token) === nil

    return true if Time.now < current_user.access_token_expires_at

    if Time.now >= current_user.access_token_expires_at
      refresh_token = current_user.refresh_token
      SpotifyService.refresh_token(refresh_token)
    end
  end
end
