import { RECEIVE_VIDEO_ERRORS, RECEIVE_VIDEO } from '../actions/video_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        case RECEIVE_VIDEO:
            return [];
        default:
            return state;
    }
};