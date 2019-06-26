import * as APIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const CLEAR_VIDEOS = "CLEAR_VIDEOS";

const receiveVideos = ({videos, users}) => ({
    type: RECEIVE_VIDEOS,
    videos,
    users
});

const receiveVideo = ({video, user, comments, commentAuthors, likes, userCommentLikes}) => {
    
    return {
        type: RECEIVE_VIDEO,
        video,
        user,
        comments,
        commentAuthors,
        likes,
        userCommentLikes
    };
};

const removeVideo = video => ({
    type: REMOVE_VIDEO,
    video
});

const receiveVideoErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

export const clearVideos = () => ({
    type: CLEAR_VIDEOS
});


export const fetchVideos = filters => dispatch => (
    APIUtil.fetchVideos(filters).then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideo = id => dispatch => (
    APIUtil.fetchVideo(id).then(video => (
        dispatch(receiveVideo(video))
    ), err => (
        dispatch(receiveVideoErrors(err.responseJSON))
    ))
);

export const createVideo = video => dispatch => (
    APIUtil.createVideo(video).then(video => (
        dispatch(receiveVideo(video))
    ), err => (
        dispatch(receiveVideoErrors(err.responseJSON))
    ))
);

export const updateVideo = video => dispatch => (
    APIUtil.updateVideo(video).then(video => (
        dispatch(receiveVideo(video))
    ), err => (
        dispatch(receiveVideoErrors(err.responseJSON))
    ))
);

export const deleteVideo = video => dispatch => (
    APIUtil.deleteVideo(video).then(() => dispatch(removeVideo(video)))
);

