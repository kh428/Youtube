import React from 'react';
import VideoItem from './video_item';

class UpNext extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.videos.length === 0) {
            return null;
        } else {
            let videoList = this.props.videos.map((video, index) => (
                <VideoItem key={index} video={video} user={this.props.users[video.uploaderId]} isColumn={true} />
            ));
            return (
                <div className="up-next-container">
                    <div className="up-next-header">
                        All videos
                    </div>
                    <div className="up-next-first">
                        {videoList.shift()}
                    </div>
                    <div className="contents">
                        {videoList}
                    </div>
                </div>
            )
        }
    }
}

export default UpNext;

