import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { createVideo } from '../../actions/video_actions';

const mapStateToProps = state => {
    return ({
        currentUserId: state.session.currentUser,
        errors: state.errors.videos
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        uploadVideo: video => dispatch(createVideo(video))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoUpload);