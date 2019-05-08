import React from 'react';
import { withRouter } from 'react-router-dom';


class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.dateUploaded = this.dateUploaded.bind(this);
        this.handleEditLink = this.handleEditLink.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    componentDidMount() {
        // this.props.clearVideos();
        this.props.fetchVideo(this.props.match.params.videoId);
        // this.props.fetchVideos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.clearVideos();
            this.props.fetchVideo(this.props.match.params.videoId);
            this.props.fetchVideos();
        }
    }

    dateUploaded() {
        let date = new Date(this.props.video.created_at);
        date = date.toString().split(" ");
        return date[1] + " " + date[2] + ", " + date[3];
    }

    handleEditLink() {
        this.props.history.push(`/videos/${this.props.match.params.videoId}/edit`);
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
        
        return(
            <div>
    
                <video src={this.props.video.video_url} controls className="videoItSelf"></video>
                
                <div className="videoTitle">
                    {this.props.video.title}
                </div>
                <div className="videosubHeaderBox">
                    <div className="usernameHeader"> 
                        <div className="usernameDateUploaded">
                            <button className="uploadersProfile">{this.props.user.username.slice(0, 1)}</button>
                            <div>
                            {this.props.user.username}
                            </div>
                            <div className="dateuploaded">
                                Published on {this.dateUploaded()}
                            </div>
                        </div>
                        <div className="editVideoButtononPage">
                            {editVideoButton}
                        </div>
                    </div>
                    <div className="description">
                        {this.props.video.description || "no description"}
                    </div>
                </div>
                
                
            </div>
            // <ProtectedRoute exact path="/videos/:videoId/edit" component={VideoEditContainer} />
                //this.props.comments
                //more videos
                //this.props.views
                //this.porps.likes
            )
        }

        }

    export default VideoShow;