Rails.application.routes.draw do
namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :show, :destroy, :index, :update]
  end
root "static_pages#root"
end
