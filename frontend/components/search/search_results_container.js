import SearchResults from "./search_results";
import { connect } from 'react-redux';
import { fetchVideos, clearVideos } from "../../actions/video_actions";

const msp = (state, ownProps) => ({
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
    search: ownProps.location.search.slice(14).split(" ").join("+")
});

const mdp = dispatch => ({
    fetchVideos: filters => dispatch(fetchVideos(filters)),
    clearVideos: () => dispatch(clearVideos())
});

export default connect(msp, mdp)(SearchResults);
