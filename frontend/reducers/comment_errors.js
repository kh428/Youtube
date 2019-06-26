import { RECEIVE_COMMENT_ERRORS} from '../actions/comment_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case RECEIVE_VIDEO:
            return [];
        default:
            return state;
    }
};