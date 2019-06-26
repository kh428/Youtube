json.video do
    json.extract! @video, :id, :title, :description
    json.uploaderId @video.uploader_id
    json.createdAt @video.created_at
    json.videoUrl url_for(@video.videoUrl)
    json.thumbnailUrl url_for(@video.thumbnailUrl)
    json.likes @video.likes.where(liked: true).count
    json.dislikes @video.likes.where(liked: false).count
end

if current_user
    @video.likes.where(user_id: current_user.id).each do |like|
        json.likes do 
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
end

json.user do 
    json.partial! '/api/users/user', user: @video.uploader
end

@video.comments.includes(:author, :replies, :likes).each do |comment|

    json.comments do
        json.set! comment.id do
            json.partial! '/api/comments/comment', comment: comment
            if comment.replies.present?
                json.commentIds do
                    json.array! comment.replies.pluck(:id)
                end
            end
        end
    end

    json.commentAuthors do
        json.set! comment.author.id do
            json.partial! '/api/users/user', user: comment.author
        end
    end

    if current_user
        comment.likes.where(user_id: current_user.id).each do |like|
            json.userCommentLikes do
                json.set! like.id do
                    json.partial! 'api/likes/like', like: like
                end
            end
        end
    end
    
end








