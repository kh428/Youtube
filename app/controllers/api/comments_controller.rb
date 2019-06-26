class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find(params[:id])
        @comment.destroy
        render json: @comment
    end

    def comment_params
        params.require(:comment).permit(:body, :parent_comment_id, :author_id, :video_id)
    end

end
