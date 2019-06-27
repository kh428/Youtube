import React from 'react';
import { withRouter } from 'react-router-dom';
import UpNext from './up_next';
import VideoItem from './video_item';
import Likes from '../likes/likes';
import CommentsSection from '../comments/comments_section';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        this.dateUploaded = this.dateUploaded.bind(this);
        this.handleEditLink = this.handleEditLink.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.clearVideos();
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.clearVideos();
            this.props.fetchVideo(this.props.match.params.videoId);
            // this.props.fetchVideos();
        }
    }

    dateUploaded() {
        let date = new Date(this.props.video.createdAt);
        date = date.toString().split(" ");
        return date[1] + " " + date[2] + ", " + date[3];
    }

    handleEditLink() {
        const videoId = this.props.match.params.videoId;
        this.props.history.push(`/videos/${videoId}/edit`);
    }

    handleSubscribe() {

    }

    render() {
        if (this.props.video === undefined) {
            return null;
        } 
        
        let editVideoButton;
        let subscribeButton;
            if (this.props.currentUser && this.props.currentUser.id === this.props.video.uploaderId) {
                editVideoButton = (<button className="edit-btn" onClick={this.handleEditLink}>EDIT VIDEO</button>);
            } else {
                subscribeButton = <button className="subscribeButton" onClick={this.handleSubscribe}>SUBSCRIBE</button>
            }

            return (
                <div className="video-show-container">
                    <div className="video-show">
                        <div className="video-container">
                            <video controls autoPlay muted>
                                <source src={this.props.video.videoUrl} type="video/mp4"></source>
                            </video>
                        </div>
                       
                        <div className="title-container">
                            <h2>{this.props.video.title}</h2>
                            {/* <h2>{this.props.video.description}</h2> */}
                            <div className="primary-info">
                                <div className="views">
                                    
                                </div>
                                <div className="video-actions">
                                    <Likes 
                                        video={this.props.video}
                                        likeable_type="Video"
                                        likeable_id={this.props.video.id}
                                        sumLikes={this.props.video.likes}
                                        sumDislikes={this.props.video.dislikes}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="description-container">
                            <div className="top-row">
                                <div className="top-row-left">
                                    <button className="user-pic-show">{this.props.uploader.first_name.slice(0, 1).toUpperCase()}</button>
                                    <div className="upload-info">
                                        <p className="uploader-name">{this.props.uploader.first_name + " " + this.props.uploader.last_name}</p>
                                        <p>Published on {this.dateUploaded()}</p>
                                    </div>
                                </div>
                                <div className="description-btn-container">
                                    {editVideoButton}
                                </div>
                            </div>
                            <p className="description">{this.props.video.description}</p>
                            
                        </div>
                        {/* <div className="index-container">
                            <div className="video-index-container">
                                <VideoGrid videos={this.props.videos.slice(0, 6)} users={this.props.users} title={"Recommended"} />
                            </div>
                        </div> */}
                        <CommentsSection 
                            currentUser={this.props.currentUser} 

                            createComment={this.props.createComment}
                            videoId={this.props.video.id}
                            users={this.props.users}
                            history={this.props.history}
                        />

                    </div>
                    <UpNext videos={this.props.videos} users={this.props.users}/>
                </div>
            )

        }
    }

export default withRouter(VideoShow);