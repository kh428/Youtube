import { RECEIVE_VIDEO, REMOVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";
import  { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            if (action.comments) {
                return action.comments;
            }
            return {};
        case RECEIVE_COMMENT:
            let newComment = { [action.comment.id]: action.comment };
            if (action.parentComment) {
                newComment[[action.parentComment.id]] = action.parentComment;
            }
            return merge({}, state, newComment);
        case REMOVE_COMMENT:
            const newState = merge({}, state);
            if (action.comment.parent_comment_id) {
                let commentIds = newState[action.comment.parent_comment_id].commentIds;
                commentIds.splice(commentIds.indexOf(action.comment.id), 1);
            } 
            if (newState[action.comment.id].commentIds) {
                newState[action.comment.id].commentIds.forEach(child => (
                    delete newState[child]
                ));
            }
            delete newState[action.comment.id];
            return newState;
        case CLEAR_VIDEOS:
        case REMOVE_VIDEO: 
            return {};
        default:
            return state;
    }
};

export default commentsReducer;