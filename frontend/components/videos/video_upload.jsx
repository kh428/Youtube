import React from 'react';

class VideoUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            file: null,
            thumbnail: null
        };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleThumbnail = this.handleThumbnail.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleFile(e) {
        this.setState({file: e.currentTarget.files[0]});
    }

    handleThumbnail(e) {
        this.setState({ thumbnail: e.currentTarget.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("video[title]", this.state.title);
        formData.append("video[description]", this.state.description);
        formData.append("video[video]", this.state.file);
        formData.append("video[thumbnail]", this.state.thumbnail);
        this.props.createVideo(formData).then(video => this.props.history.push('/'));
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                this.props.errors.map (error => error)
            )
        }
    }


    render() {
        return (
            <div className="uploadBackground">
                <form onSubmit={this.handleSubmit} className="upLoadPage">
                    <label>
                        <input className="videoUploadButton" type="file" onChange={this.handleFile}/>
                    </label>
                    <input className="titleInput" type="text" value={this.state.title} onChange={this.handleInput("title")} placeholder="Title"/>
                    <textarea className="descriptionInput" type="text" value={this.state.description} onChange={this.handleInput("description")} placeholder="Description" />
                
                <label className="thumbnailText">
                    Thumbnail
                    <input type="file" onChange={this.handleThumbnail} />
                </label>
                    <div className="typeOfThumbnail">
                        TIFF, JPEG, GIF, PNG
                    </div>
                <input className="publishButton" type="submit" value="Publish"/>
            </form>
                </div>
        );
    }
}

export default VideoUpload;