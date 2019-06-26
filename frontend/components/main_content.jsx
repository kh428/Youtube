import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import VideoUploadContainer from './videos/video_upload_container';
import VideoEditContainer from './videos/video_edit_container';
import SearchResultsContainer from './search/search_results_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SideBar from './side_bar/side_bar';
import { throttle } from 'lodash';
import search_results_container from './search/search_results_container';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideBarHidden: true
        };
    }

    toggleSideBar() {
        return e => {
            if (this.state.sideBarHidden) {
                this.setState({ sideBarHidden: false });
            } else {
                this.setState({ sideBarHidden: true });
            }
        };
    }

    render() {
        const sideBar = this.state.sideBarHidden ? (<div></div>) : (<SideBar />);
        return (
            <>
                <NavBarContainer toggleSideBar={this.toggleSideBar()} />
                <div className="after-header">
                    {sideBar}
                    <Switch>
                        <Route exact path="/" component={VideoIndexContainer} />
                        <ProtectedRoute exact path="/videos/:videoId/edit" component={VideoEditContainer} />
                        <Route path="/videos/:videoId" component={VideoShowContainer} />
                        <ProtectedRoute path="/upload" component={VideoUploadContainer} />
                        <Route path="/results" component={SearchResultsContainer} />
                    </Switch>
                </div>
            </> 
        )
    }
}

export default MainContent;