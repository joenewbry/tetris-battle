class RedisBindingsController < ApplicationController

  def new_direction
    $redis.publish 'user-created', {role: params[:direction] }.to_json
    respond_to do |format|
      format.json { head :no_content }
    end
  end
end
