Rails.application.routes.draw do
  namespace :api do
    resources :companies, only: [:index, :create, :destroy]
  end
end
