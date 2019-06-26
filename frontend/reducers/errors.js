import { combineReducers } from 'redux';
import session from './session_errors';
import videos from './video_errors';
import comments from './comment_errors';

export default combineReducers({videos, comments, session});