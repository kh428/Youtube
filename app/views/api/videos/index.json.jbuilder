# json.videos @videos
json.videos do
    json.array! @videos do |video|
        json.partial! 'video', video: video
    end
end

json.users do
    json.array! @videos do |video|
        json.partial! '/api/users/user', user: video.user
    end
end