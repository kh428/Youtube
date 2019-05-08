
json.extract! video, :id, :title, :description, :channel_id, :created_at
json.video_url url_for(video.video)
json.user_id video.user.id
json.thumbnail_url url_for(video.thumbnail)