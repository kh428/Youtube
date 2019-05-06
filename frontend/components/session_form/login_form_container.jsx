import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearErrors} from '../../actions/session_actions';
import React from 'react';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors && errors.session || [],
        formType: 'Log In',
        navLink: <Link to="/signup">Create account</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);