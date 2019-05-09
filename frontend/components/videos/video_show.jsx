import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import VideoIndexContainer from "./video_index_container";


class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.dateUploaded = this.dateUploaded.bind(this);
        this.handleEditLink = this.handleEditLink.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    dateUploaded() {
        let date = new Date(this.props.video.created_at);
        date = date.toString().split(" ");
        return date[1] + " " + date[2] + ", " + date[3];
    }

    handleEditLink() {
        const videoId = this.props.match.params.videoId;
        this.props.history.push(`/videos/${videoId}/edit`);
    }

    handleSubscribe () {  
    }

    render() {
        if (this.props.video === undefined) {
            return null;
        }
            
        let editVideoButton;
        let subscribeButton;
        if (this.props.currentUser && this.props.currentUser.id === this.props.video.user_id) {
            editVideoButton = <button className="editvideobutton" onClick={this.handleEditLink}>EDIT VIDEO</button>
        } else {
            subscribeButton = <button className="subscribeButton" onClick={this.handleSubscribe}>SUBSCRIBE</button>
        }
        
        return (
          <div className="wholeThing">
            <div className="LeftSectionofShow">
              <video
                className="videoItSelf"
                src={this.props.video.video_url}
                controls
              />
              <div className="videoTitleshow">
                {this.props.video.title}
              </div>
              <div className="videosubHeaderBox">
                <div className="usernameHeader">
                  <div className="usernameHeaderLeft">
                    <div>
                      <button className="uploadersProfile">
                        {this.props.user.username.slice(0, 1)}
                      </button>
                    </div>
                  </div>
                  <div className="userDescContainer">
                    <div className="usernameDateUploaded">
                      <div className="username">
                        {this.props.user.username}
                      </div>
                      <div className="dateuploaded">
                        Published on {this.dateUploaded()}
                      </div>
                    </div>
                    <div className="description">
                      {this.props.video.description || "no description"}
                    </div>
                  </div>

                  <div className="editVideoButtononPage">
                    {editVideoButton}
                  </div>
                </div>
              </div>
            </div>
            <div className="nextVideos">
              <div className="nextVideos">Next Videos</div>
              {this.props.videos.slice(0, 6).map(video => {
                if (video.id === this.props.video.id) return null;
                return (
                  <Link
                    className="oneVideoshow"
                    key={video.id}
                    to={`/videos/${video.id}`}
                  >
                    <div>
                      <img
                        className="displayingThumbnailshow"
                        src={video.thumbnail_url}
                      />
                    </div>
                    <ul className="titleUsernameInfoShow">
                      <li className="videoTitleindexshow">
                        {video.title}
                      </li>
                      <li className="videoUsernameShow">
                        {video.username}
                      </li>
                      <li className="recommended">Recommended for you</li>
                    </ul>
                  </Link>
                );
              })}
            </div>
          </div>
        );
        }
     }

    export default VideoShow;