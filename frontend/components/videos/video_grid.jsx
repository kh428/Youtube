import React from 'react';
import VideoItem from './video_item';

class VideoGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let videoGrid = {this.props.videos}.map(video => (
        //     <VideoItem video={this.props.video}/>
        // ));
        let videoGrid = this.props.videos.map( (video, index) => (
            <VideoItem key={index} video={video} user={this.props.users[video.uploaderId]}/>
        ));
        return (
            <div className="video-grid-container">
                <div className="grid-subheader">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="contents">
                    {videoGrid}
                </div>
            </div>
        )
    }
}

export default VideoGrid;