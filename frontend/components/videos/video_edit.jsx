import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.video.title,
            description: this.props.video.description,
            thumbnailFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchVideo(this.props.match.params.videoId);
    // }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleFile(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.files[0] });

        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[id]', this.props.match.params.videoId);
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        if (this.state.thumbnailFile) {
            formData.append('video[thumbnailUrl]', this.state.thumbnailFile);
        }
        this.props.updateVideo(formData).then(video => this.props.history.push('/'));
    }

    handleDelete() {
        this.props.deleteVideo(this.props.video).then(video => this.props.history.push('/'));
    }

    handleCancel() {
        this.props.history.push('/');
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

    charCount(field) {
        return e => {
            field.length();
        }
    }



    render() {
        if (this.props.video) {
            const errorClass = this.props.errors.length > 0 ? "error-login" : "";
            return (
                <div className="upload-page">
                    <div className="edit-container">
                        
                        <form onSubmit={this.handleSubmit} className="upload-prompt">

                            <div className="upload-part-one">
                                <div className="edit-text">Edit your video</div>
                            </div>

                            <div className="upload-part-two">
                                <div>
                                    <div className="title-input-edit">
                                        <textarea id="title" className="title-text" placeholder="Add title" value={this.state.title} onChange={this.handleInput("title")} />
                                        <label htmlFor="title">Title</label>
                                        <div className="char-count-container">
                                            <p className="char-count">{this.state.title.length}/100</p>
                                        </div>
                                    </div>
                                    <div className="title-error-container">
                                    </div>
                                </div>

                                <div className="description-input-edit">
                                    <textarea id="description" className="description-text" placeholder="Add description" value={this.state.description} onChange={this.handleInput("description")} />
                                    <label htmlFor="description">Description</label>
                                    <div className="char-count-container">
                                        <p className="char-count">{this.state.description.length}/5000</p>
                                    </div>
                                </div>

                                <div className="file-edit-input-container">
                                    <input className="upload-input" id="thumbnail-upload" type="file" accept="image/*" onChange={this.handleFile("thumbnailFile")} />
                                    <label className="thumbnail-label" htmlFor="thumbnail-upload">Custom thumbnail</label>
                                </div>

                                {this.renderErrors()}

                                <div className="edit-btn-row">
                                    <input className="edit-btn" type="submit" value="SAVE" />
                                    <button type="button" className="edit-btn" onClick={this.handleDelete}>DELETE</button>
                                    <button type="button" className="edit-btn" onClick={this.handleCancel}>CANCEL</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

}

export default withRouter(VideoEdit);