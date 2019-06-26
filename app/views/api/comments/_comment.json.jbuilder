json.extract! comment, :id, :body
json.authorId comment.author_id
json.videoId comment.video_id
json.parentCommentId comment.parent_comment_id
json.createdAt comment.created_at
json.likes comment.likes.where(liked: true).count
json.dislikes comment.likes.where(liked: false).count