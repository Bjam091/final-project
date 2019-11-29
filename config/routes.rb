Rails.application.routes.draw do
  post '/user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/authorize', to: 'users#authorize'
  get '/callback', to: 'users#callback'
  get '/current-track', to: 'users#current_track'
  get '/recently-played', to: 'users#recently_played'
  get '/users/current', to: 'users#current'
  get '/nearby', to: 'users#nearby'
  get '/nearby/tracks', to: 'users#nearby_tracks'
  get '/tracks/liked_tracks', to: 'tracks#liked_tracks'
  get '/tracks/liked_count/:id', to: 'tracks#liked_count'
  post '/tracks/like/:id', to: 'tracks#like_track'
  post '/tracks/unlike/:id', to: 'tracks#unlike_track'

  namespace :api do # /api/data

    get '/data', to: 'tests#index'

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
