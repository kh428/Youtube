import React from 'react';
import LoadingSpinner from '../misc/loading_spinner';

class VideoUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            videoFile: null,
            thumbnailFile: null,
            firstForm: true,
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleFile(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.files[0]});
            if (field === "videoFile") {
                this.toggleForm();
            } 
        };
    }

    toggleForm(e) {
        this.setState({firstForm: !this.state.firstForm});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[uploader_id]', this.props.currentUserId);
        if (this.state.videoFile) {
            formData.append('video[videoUrl]', this.state.videoFile);
        }
        if (this.state.thumbnailFile) {
            formData.append('video[thumbnailUrl]', this.state.thumbnailFile);
        }
        this.setState({loading: true});
        this.props.uploadVideo(formData).then(video => {
            this.setState({loading: false});
            this.props.history.push('/');
        });
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                <ul className="error-upload-list">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            <i className="fas fa-exclamation-circle"></i>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            <div className="upload-page">
                <div className="upload-container">
                    <form onSubmit={this.handleSubmit} className="upload-prompt">
                        {this.state.firstForm ? (
                            <>
                                <input className="upload-input" id="upload" type="file" accept="video/mp4,video/*" onChange={this.handleFile("videoFile")} />
                                <label htmlFor="upload">
                                    <i id="upload-icon" className="fas fa-arrow-circle-up"></i>
                                </label>
                                <div className="upload-text">Select files to upload</div>
                            </>
                        ) : (
                            <>
                                <div className="upload-text-two">Add video information</div>
                                <input className="title-input" type="text" placeholder="Title" onChange={this.handleInput("title")} />
                                <textarea className="description-input" placeholder="Description" onChange={this.handleInput("description")} />
                                <input className="upload-input" id="thumbnail-upload" type="file" accept="image/*" onChange={this.handleFile("thumbnailFile")} />
                                <label className="thumbnail-label" htmlFor="thumbnail-upload">Custom thumbnail</label>
                                <div className="error-upload-container">
                                    {this.renderErrors()}
                                </div>
                                <input className="publish-btn" type="submit" value="Publish" />
                                {this.state.loading ? (<LoadingSpinner />) : (<></>)}
                            </>
                        )}       
                    </form>
                </div>
            </div>
        )
    }

}

export default VideoUpload;