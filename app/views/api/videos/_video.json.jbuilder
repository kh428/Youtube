json.extract! video, :id, :title, :description
json.uploaderId video.uploader_id
json.createdAt video.created_at
json.videoUrl url_for(video.videoUrl)
json.thumbnailUrl url_for(video.thumbnailUrl)