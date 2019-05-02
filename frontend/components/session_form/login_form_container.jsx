import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import React from 'react';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors && errors.session || [],
        formType: 'login',
        navLink: <Link to="/signup">sign up for now</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);