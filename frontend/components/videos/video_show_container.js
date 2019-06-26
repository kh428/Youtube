import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos, clearVideos } from '../../actions/video_actions';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    const video = state.entities.videos[ownProps.match.params.videoId];
    const comments = state.entities.comments;
    let uploader;
    if (video) {
        uploader = state.entities.users[video.uploaderId];
    }
    return {
        currentUser: state.entities.users[state.session.currentUser],
        uploader: uploader,
        video: video,
        comments: comments,
        users: state.entities.users,
        videos: Object.values(state.entities.videos),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: id => dispatch(fetchVideo(id)),
        fetchVideos: () => dispatch(fetchVideos()),
        clearVideos: () => dispatch(clearVideos()),
        createComment: comment => dispatch(createComment(comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);