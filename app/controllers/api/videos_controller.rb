class Api::VideosController < ApplicationController
    def index
        @videos = Video.all

    end

    def show
        @video = Video.find_by(id: params[:id])
    end

    def create
        return false unless authorized_user?
        
        @user = current_user
        
        @video = Video.new(video_params, current_user.id)

        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def update
        return false unless authorized_user?

        @user = current_user
        @video = current_user.videos.find(params[:id])

        if @video.update_attributes(video_params)
            render :show
            # render 'api/videos/show.json.jbuilder'
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = current_user.uploads.find(params[:id])
        @video.destroy
        render json: video
    end

    private 
    def video_params
        params.require(:video).permit(:title, :description)
    end

end
