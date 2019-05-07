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
        // debugger
        if (this.props.currentUser && this.props.currentUser.id === this.props.video.user_id) {
            editVideoButton = <button className="editvideobutton" onClick={this.handleEditLink}>EDIT VIDEO</button>
        } else {
            subscribeButton = <button className="subscribeButton" onClick={this.handleSubscribe}>SUBSCRIBE</button>
        }
        
        return(
            <div>
                <h1>
                <video src={this.props.video.video_url} controls></video>
                </h1>
                <li>
                {this.props.video.title}
                </li>
                <li>
                    {this.props.username}
                </li>
                <li>
                    {this.dateUploaded()}
                </li>
                <li>
                    {/* <Link to="/videos/:videoId/edit"> */}
                    {editVideoButton}
                    {/* </Link> */}
                </li>
                
                <li>
                {this.props.video.description || "no description"}
                </li>
                
                
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