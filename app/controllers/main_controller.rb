class MainController < ApplicationController
  def index
    @current_step = session[:step] || 'step_1'
    @user = session[:user] || User.new
    @survey ||= Survey.new
    session[:time] ||= (Time.parse((Time.now + 360.seconds).to_s).utc.to_i*1000)
  end
end
