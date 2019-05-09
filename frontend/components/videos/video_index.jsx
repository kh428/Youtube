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
                            Recommended
                        </div>
                    <div className="allVideos">

                    {this.props.videos.map(video => {
                        return (
                          <div className="oneVideo">
                            <Link
                              to={`/videos/${video.id}`}
                            >
                              
                                <img
                                  className="displayingThumbnail"
                                  src={
                                    video.thumbnail_url
                                  }
                                />
                              
                              <div className="videoTitleindex">
                                {video.title}
                              </div>
                              <div className="usernameindex">
                                {video.username}
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