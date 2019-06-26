import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComments = ({ comments, users }) => ({
    type: RECEIVE_COMMENTS,
    comments,
    users
});

const receiveComment = ({comment, user, parentComment}) => ({
    type: RECEIVE_COMMENT,
    comment,
    user,
    parentComment
});

const removeComment = comment => {
    return {
        type: REMOVE_COMMENT,
        comment
    };
};

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const fetchComment = () => dispatch => (
    APIUtil.fetchComment().then(comment => dispatchEvent(receiveComment(comment)))
);

export const fetchComments = () => dispatch => (
    APIUtil.fetchComments().then(comments => dispatch(receiveComments(comments)))
);

export const createComment = comment => dispatch => (
    APIUtil.createComment(comment).then(comment => (
        dispatch(receiveComment(comment))
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
);

export const updateComment = comment => dispatch => (
    APIUtil.updateComment(comment).then(comment => (
        dispatch(receiveComment(comment))
    ), err => (
        dispatch(receiveCommentErrors(err.responseJSON))
    ))
);

export const deleteComment = comment => dispatch => (
    APIUtil.deleteComment(comment).then(() => dispatch(removeComment(comment)))
);

