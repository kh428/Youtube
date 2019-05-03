import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
const App = () => (
    <div>
        <div className="header"> 
            <div className="logo">
                <img src={window.images.logo} className="youtubelogo"/>
                <h1>YourTube</h1>
            </div>
            <GreetingContainer />
        </div>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;