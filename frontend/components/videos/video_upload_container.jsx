import { connect } from 'react-redux';
import VideoUpload from './video_upload';
import { createVideo, fetchVideo } from "../../actions/video_actions";

const mapStateToProps = state => {
    // console.log("HERE IS MY STATE:", state)

    return ({
        currentUserId: state.session.currentUser,
        errors: state.errors.videos,
    });
};

const mapDispatchToProps = dispatch => {
    return {
      createVideo: video => dispatch(createVideo(video)),
    //   fetchVideo: videoId => dispatch(fetchVideo(videoId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoUpload);