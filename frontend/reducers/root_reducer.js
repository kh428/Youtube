import entities from './entities_reducer';
import ui from './ui_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    entities,
    session,
    ui,
    errors,
});

export default rootReducer;