import React from 'react';
import { withRouter } from 'react-router-dom';

class UploadDropdown extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleUploadLink = this.handleUploadLink.bind(this);
    }

    handleUploadLink() {
        this.props.history.push('/upload');
    }

    render() {
        return (
            <div className="dropdown">
                <div className="dropdown-content-upload">
                    <div className="drop-group">
                        <div className="drop-item" onClick={this.handleUploadLink}>
                            <div className="drop-icon">
                                <i className="fab fa-youtube"></i>
                            </div>
                            <div>Upload video</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UploadDropdown);