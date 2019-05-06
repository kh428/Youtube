import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import React from 'react';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors && errors.session || [],
        formType: 'signup',
        navLink: <Link to="/login">Sign in instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);