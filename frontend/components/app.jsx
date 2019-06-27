import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import MainContent from './main_content';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils';

const App = () => (
    <div className="outer-div">
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/" component={MainContent}/>
        </Switch>
    </div>
);

export default App;