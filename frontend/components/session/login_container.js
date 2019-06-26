import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import Login from './login';

const mapStateToProps = ({errors})=> ({
    errors: errors.session,
    formType: "email"
});

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);