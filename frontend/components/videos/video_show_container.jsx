import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
     const video = state.entities.videos[ownProps.match.params.videoId]
    return {
        video: video,
        currentUser: state.entities.users[state.session.id],
        user: video ? state.entities.users[video.user_id] : null
    };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchVideo: id => dispatch(fetchVideo(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);