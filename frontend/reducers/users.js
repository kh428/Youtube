import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_VIDEOS, RECEIVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";
import merge from 'lodash/merge';
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session";


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return merge({}, state, action.users);
        case RECEIVE_VIDEO:
            let newState = merge({}, state, { [action.user.id]: action.user });
            return merge({}, newState, action.commentAuthors);
        case RECEIVE_CURRENT_USER:
        case RECEIVE_COMMENT:
            return merge({}, state, {[action.user.id]: action.user});
        // case RECEIVE_ALL_USERS:
        // case RECEIVE_USER:
        //     const newUser = { [action.user.id]: action.user };
        //     return merge({}, state, newUser);
        // case CLEAR_VIDEOS:
        //     return {};
        default:
            return state;
    }
};

export default usersReducer;