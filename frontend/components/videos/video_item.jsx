import React from 'react';
import { Link } from 'react-router-dom';
import { timeSincePost } from '../../util/format_util';

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isColumn: this.props.isColumn
        };
    }

    render() {
        const isColumn = this.state.isColumn;
        let content;
        if (isColumn) {
            content = (
                <div className="video-item-container-col">
                    <div className="video-thumbnail-container-col">
                        <img src={this.props.video.thumbnailUrl} className="video-thumbnail-col" />
                        <div className="video-thumbnail-background-col"></div>
                        <div className="video-item-overlay-col">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                    <div className="video-details-col">
                        <h3>{this.props.video.title}</h3>
                        <div className="upload-name-col">
                            {this.props.user.first_name}
                        </div>
                        <div className="upload-time-col">
                            Recommended for you
                        </div>
                    </div>
                </div>
            )
        } else {
            content = ( 
                <div className="video-item-container">
                    <div className="video-thumbnail-container">
                        <img src={this.props.video.thumbnailUrl} className="video-thumbnail" />
                        <div className="video-thumbnail-background"></div>
                        <div className="video-item-overlay">
                            <i className="fas fa-play"></i>
                        </div>
                    </div>
                    <div className="video-details">
                        <h3>{this.props.video.title}</h3>
                        <div className="upload-name">
                            {this.props.user.first_name}
                        </div>
                        <div className="upload-time">
                            {timeSincePost(this.props.video.createdAt)}
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <Link to={`/videos/${this.props.video.id}`} className="video-item-link">
                {content}
            </Link>
        )
    }
}

export default VideoItem;