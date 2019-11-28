
module SpotifyService
  @request_url = 'https://accounts.spotify.com/authorize'
  @development_redirect = 'https://5bcbef52.ngrok.io'
  @client_id = ENV['SPOTIFY_CLIENT_ID']
  @client_secret = ENV['SPOTIFY_SECRET_KEY']

  #@authorize_endpoint = "#{@authorize_url}?client_id=#{@client_id}&response_type=code&redirect_uri=#{@development_redirect}&scope=user-read-currently-playing"
  # https://developer.spotify.com/documentation/general/guides/authorization-guide/

  class << self
    def authorize
      "#{@request_url}?client_id=#{@client_id}&response_type=code&redirect_uri=#{@development_redirect}/callback&scope=user-read-currently-playing%20user-read-recently-played"
    end

    def fetch_tokens code
      @code = code
      @code.slice! "code=" #formatted as code=Ab43D322%4... (we need to remove the code=)

      options = {
        body: {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: "#{@development_redirect}/callback",
          client_id: @client_id,
          client_secret: @client_secret,
        }
      }

      @response = HTTParty.post('https://accounts.spotify.com/api/token', options)
      #response contains the access token and refresh token (needs to be DB persisted)
      #binding.pry
      fetch_user(@response)
    end

    def fetch_user tokens
      @access_token = tokens["access_token"]
      @refresh_token = tokens["refresh_token"]

      @response = HTTParty.get('https://api.spotify.com/v1/me', headers: {"Authorization": "Bearer #{@access_token}"})
      #binding.pry

      User.update_persist_user(tokens, @response)
    end
  end
end