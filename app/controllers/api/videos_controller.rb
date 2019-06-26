class Api::VideosController < ApplicationController
    def index
        if params[:search]
            search
        else 
            @videos = Video.all
        end
    end

    def show
        @video = Video.find_by(id: params[:id])
    end

    def create
        return false unless authorized_user?
        
        @user = current_user
        
        @video = Video.new(video_params)
        @video.channel_id = current_user.channel.id

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
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = current_user.uploads.find(params[:id])
        @video.destroy
        render json: video
    end

    def search
        query_words = params[:search].split("+").map(&:downcase).join(" ")
        query = "%#{query_words}%"
        @videos = Video.where("title ILIKE ?", query)
    end
    
    private 
    def video_params
        params.require(:video).permit(:title, :description, :video, :thumbnail)
    end

end
