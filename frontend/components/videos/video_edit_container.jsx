import { connect } from 'react-redux';
import VideoEdit from './video_edit';
import VideoUpload from "./video_upload";
import { fetchVideo, updateVideo, deleteVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        currentUserId: state.session.currentUser,
        video: state.entities.videos[ownProps.match.params.videoId],
        errors: state.errors.videos,
        formtype: "edit"
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchVideo: id => dispatch(fetchVideo(id)),
        updateVideo: (video) => dispatch(updateVideo(video)),
        deleteVideo: video => dispatch(deleteVideo(video))
    });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoUpload);
