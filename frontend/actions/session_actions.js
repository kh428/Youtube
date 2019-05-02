import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
);

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then(result => dispatch(receiveCurrentUser(result)), err => (
            dispatch(receiveErrors(err.responseJSON))
        ));
};

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(user => dispatch(logoutCurrentUser())
        )
);