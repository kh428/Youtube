import React from 'react';

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
                    return <li>{video.title}</li>;
                })}
                </div>
            );
        }
    }
}

export default VideoIndex;