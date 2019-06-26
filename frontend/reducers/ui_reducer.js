import { RECEIVE_SEARCH } from '../actions/search_actions';

export default (state = {search: ""}, action) => {
    switch (action.type) {
        case RECEIVE_SEARCH:
            return Object.assign({}, state, {search: action.search});
        default:
            return state;
    }
};