json.comment do
    json.partial! 'api/comments/comment', comment: @comment
end

if @comment.parent_comment_id
    parent = @comment.parent_comment
    json.parentComment do
        json.partial! 'api/comments/comment', comment: parent
        json.commentIds do
            json.array! parent.replies.pluck(:id)
        end
    end
end

json.user do 
    json.partial! 'api/users/user', user: @comment.author
end

