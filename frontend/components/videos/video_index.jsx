import React from 'react';
import {Link} from 'react-router-dom';
import { userInfo } from 'os';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        if (this.props.videos.length === 0) {
            return null;
        } else {
            return (
                <div className="indexBackground">
                <div className="label">
                        <h1 >     Recommended</h1>
                </div>
                <div className="allVideos">
                {this.props.videos.map(video => {
                    return (
                    <div className="oneVideo">
                    <Link to={`/videos/${video.id}`}>
                        <div>
                            <img className="displayingThumbnail" src={video.thumbnail_url}/>
                        </div>
                    <div className="videoTitle">
                    
                    {video.title}
                    </div>
                    </Link>
                    </div>
                    
                );
                })}
                </div>
                </div>
            );
        }
    }
}

export default VideoIndex;