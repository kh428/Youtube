import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = like => ({
    type: REMOVE_LIKE,
    like
});

export const createLike = like => dispatch => (
    APIUtil.createLike(like).then(like => (
        dispatch(receiveLike(like))
    ))
);

export const deleteLike = like => dispatch => (
    APIUtil.deleteLike(like).then(() => dispatch(removeLike(like)))
);