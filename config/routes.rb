Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/authorize', to: 'users#authorize'
  get '/callback', to: 'users#callback'
  get '/current-track', to: 'users#current_track'
  get '/recently-played', to: 'users#recently_played'

  namespace :api do # /api/data

    get '/data', to: 'tests#index'

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
