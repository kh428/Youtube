import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Link, Route, Switch} from "react-router-dom";
import VideoIndexContainer from "./videos/video_index_container";
import VideoShowContainer from "./videos/video_show_container";
import VideoUploadContainer from "./videos/video_upload_container";
import VideoEditContainer from "./videos/video_edit_container";
import MainContent from './main_content';

const App = () => (
  <div className="outer-div">
    <Switch>
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LogInFormContainer} />
      <Route path="/" component={MainContent} />
    </Switch>
  </div>
);

export default App;

// reformatting
// const App = () => (
//   <div>
//     <div className="header">
//       <div className="logo">
//         <Link to="/">
          
//             <img src={window.images.logo} className="youtubelogo" />
          
          
//             <div className="yourtube">YourTube</div>
          
//         </Link>
//       </div>
//       <div className="searchWhole">
//         <div className="searchbox-container">
//           <input className="searchBox" type="text" placeholder="Search" />
//         </div>
//         <div className="searchbutton">
//           <i className="searchicon fas fa-search" />
//         </div>
//       </div>
//       <div className="endofHeader">
//         <Link to="/upload">
//           <i className="cameraLogo fas fa-video" />
//         </Link>
//         <GreetingContainer />
//       </div>
//     </div>
//     <Route exact path="/" component={VideoIndexContainer} />
//     <Route exact path="/videos/:videoId" component={VideoShowContainer} />
//     <ProtectedRoute
//       exact
//       path="/videos/:videoId/edit"
//       component={VideoEditContainer}
//     />
//     <ProtectedRoute exact path="/upload" component={VideoUploadContainer} />
//     <AuthRoute exact path="/login" component={LogInFormContainer} />
//     <AuthRoute exact path="/signup" component={SignUpFormContainer} />
//   </div>
// );

// export default App;