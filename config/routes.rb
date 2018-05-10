Rails.application.routes.draw do

  root 'portfolio#index'
  get "*path", to: "portfolio#index"
end
