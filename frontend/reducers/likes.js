import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';
import { RECEIVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';


const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_LIKE:
            const newLike = { [action.like.id]: action.like };
            return merge({}, state, newLike);
        case REMOVE_LIKE:
            newState = merge({}, state);
            delete newState[action.like.id];
            return newState;
        case RECEIVE_VIDEO:
            newState = merge({}, state);
            return {...newState, ...action.likes, ...action.userCommentLikes};
        case RECEIVE_CURRENT_USER:
            return {};
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default likesReducer;