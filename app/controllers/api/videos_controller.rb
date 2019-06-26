class Api::VideosController < ApplicationController

    def index
        if params[:search]
            search
        else 
            @videos = Video.all
        end
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def create
        @video = Video.new(video_params)
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 404
        end
    end

    def update
        @video = Video.find_by(id: params[:video][:id])
        if @video.update_attributes(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def destroy
        @video = current_user.uploads.find(params[:id])
        @video.destroy
        render json: @video
    end

    def search
        query_words = params[:search].split("+").map(&:downcase).join(" ")
        query = "%#{query_words}%"
        @videos = Video.where("title ILIKE ?", query)
    end

    def video_params
        params.require(:video).permit(:id, :title, :description, :uploader_id, :videoUrl, :thumbnailUrl)
    end

end
