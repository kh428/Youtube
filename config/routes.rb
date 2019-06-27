Rails.application.routes.draw do
  root "static_pages#root"
namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :show, :destroy, :index, :update] do
      resources :comments, only: [:index, :show, :create]
      post '/likes', to: 'likes#create'
      delete '/likes', to: 'likes#destroy'
  end
  resources :comments, only: [:update, :destroy] do
    post '/likes', to: 'likes#create'
    delete '/likes', to: 'likes#destroy'
  end

end

end
