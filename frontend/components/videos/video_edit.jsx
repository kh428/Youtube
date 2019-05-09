import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { listenerCount } from 'cluster';

class VideoEdit extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // title: this.props.video.title,
            // description: this.props.video.description
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

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
        formData.append("video[title]", this.state.title);
        formData.append("video[description], this.state.descroption");

        this.props.updateVideo().then(video => this.props.history.push('/'));
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
                this.props.errors.map(error => 
                    <li>
                        {error}
                    </li>
            ));
        }
    }

    render() {
        return(
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
        )
    }
}

export default VideoEdit;