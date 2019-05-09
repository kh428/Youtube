import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
     const video = state.entities.videos[ownProps.match.params.videoId]
    return {
        video: video,
        currentUser: state.entities.users[state.session.id],
        user: video ? state.entities.users[video.user_id] : null,
        videos: Object.values(state.entities.videos)
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchVideo: id => dispatch(fetchVideo(id)),
        fetchVideos: () => dispatch(fetchVideos())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);