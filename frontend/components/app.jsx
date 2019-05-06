import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import {Link} from "react-router-dom";

const App = () => (
    <div>
        <div className="header"> 
            <div className="logo">
                <Link to="/">
                    <img src={window.images.logo} className="youtubelogo"/>
                    <h1 className="yourtube">YourTube</h1>
                </Link>
            </div>
            <GreetingContainer />
        </div>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;