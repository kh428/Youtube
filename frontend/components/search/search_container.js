
import Search from './search';
import { connect } from 'react-redux';
import {fetchVideos, clearVideos } from '../../actions/video_actions';

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: filters => dispatch(fetchVideos(filters)),
        clearVideos: () => dispatch(clearVideos())
    };
};

export default connect(null, mapDispatchToProps)(Search);