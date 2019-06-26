json.videos do
    @videos.each do |video|
        json.set! video.id do
            json.partial! 'video', video: video
        end
    end
end

json.users do
    @videos.each do |video|
        json.set! video.uploader_id do
            json.extract! video.uploader, :id, :first_name, :last_name
        end
    end
end