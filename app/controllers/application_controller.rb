class ApplicationController < ActionController::Base
    # protect_from_forgery with: exception
  skip_before_action :verify_authenticity_token

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token
    @current_user = user
  end

  def logout  
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

   def authorized_user?(id=nil)
    unless logged_in?
      render json: ['Requires user to be logged in.'], status: 401
      return false
    end
    if current_user.id != id && id != nil
      render json: ['You are not authorized.'], status: 401
      return false
    end
    true
  end
end
