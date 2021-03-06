import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';

const mapStateToProps = state => {

    return {
        currentUser: state.entities.users[state.session.currentUser] 
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);