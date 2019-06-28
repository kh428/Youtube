import React from 'react';
import VideoGrid from './video_grid';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.clearVideos();
        this.props.fetchVideos();
    }
    //deploying to heroku
    render() {
        if (this.props.videos.length === 0) {
            return null;
        } else {
            return (
                <div className="index-container">
                    <div className="video-index-container">
                        <VideoGrid videos={this.props.videos.slice(0,8)} users={this.props.users} title={"Recommended"}/>
                    </div>
                    <div className="video-index-container">
                        <VideoGrid videos={this.props.videos.slice(8,100)} users={this.props.users} title={"More Videos You Might Consider"} />
                    </div>
                </div>
            )
        }
    }
}

export default VideoIndex;