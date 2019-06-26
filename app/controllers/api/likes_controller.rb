class Api::LikesController < ApplicationController

    def create
        @like = Like.find_or_initialize_by(like_params)
        @like.liked = params[:like][:liked]
        if @like.save
            render :show
        else 
            render json: @like.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @like = current_user.likes.find(params[:like][:id])
        @like.destroy
        render json: @like
    end

    def like_params
        params.require(:like).permit(:id, :likeable_id, :likeable_type, :user_id)
    end

end
