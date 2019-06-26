import { connect } from 'react-redux';
import UpNext from './up_next';
import { fetchVideos, fetchVideo } from '../../actions/video_actions';

const mapStateToProps = (state) => {
    return ({
        videos: Object.values(state.entities.videos),
        users: state.entities.users
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: id => dispatch(fetchVideo(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(UpNext);