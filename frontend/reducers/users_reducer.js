import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VIDEOS } from '../actions/video_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_VIDEOS:
             action.users.forEach(user => {
                 newState[user.id] = user;
             });
             return newState;
        default:
            return state;
    }
};
export default usersReducer;