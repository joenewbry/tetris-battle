class StaticController < ApplicationController

  def index
  end

  def create_user
    @role = params[:role]

    $redis.publish 'user-created', {role: @role }.to_json

    respond_to do |format|
      format.js {}
    end
  end

  def look_for_match
  end
end
