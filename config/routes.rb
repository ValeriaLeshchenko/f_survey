FSurvey::Application.routes.draw do

  resources :surveys
  resources :users


  root to: 'main#index'

end
