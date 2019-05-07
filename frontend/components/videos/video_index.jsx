import React from 'react';
import {Link} from 'react-router-dom';

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
                <div>
                <h1>Recommended</h1>
                {this.props.videos.map(video => {
                    return (
                    <Link to={`/videos/${video.id}`}>
                    <img src={video.thumbnail_url}/>
                    {video.title}
                    </Link>
                );
                })}
                </div>
            );
        }
    }
}

export default VideoIndex;