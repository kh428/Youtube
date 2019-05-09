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

    componentDidMount() {
        if (this.props.match && this.props.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);
        }        
    }

    componentDidUpdate(prevProps, prevState) {
        const isVideoLoaded =
          this.props.video &&
          this.props.video.title !== prevState.title;

        if (isVideoLoaded) {
            const { video: {
                title, description, thumbnail
            } } = this.props;

            this.setState({
              title,
              description,
              thumbnail
            });
        }
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
        const { title, description, file, thumbnail } = this.state;
        const {
          params: { videoId }
        } = this.props.match;
        const isEditing = this.props.location.pathname.includes("edit");

        if (isEditing) {
            // NOTE: we dont allow editing video itself
            formData.append("video[id]", videoId);
            formData.append("video[title]", title);
            formData.append("video[description]", description);
            formData.append("video[thumbnail]", thumbnail);

            const params = {
                id: videoId,
                video: {
                    title,
                    description,
                    thumbnail,
                }
            }

            this.props
              .updateVideo(params)
              .then(video =>
                this.props.history.push(`/videos/${videoId}`)
              );
        } else {
            formData.append("video[title]", title);
            formData.append("video[description]", description);
            formData.append("video[thumbnail]", thumbnail);
            formData.append("video[video]", file);
            this.props
                .createVideo(formData)
                .then(video =>
                this.props.history.push("/")
                );
        }
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
                    {this.props.formtype === "edit" ? null : (
                        <label>
                            <input className="videoUploadButton" type="file" onChange={this.handleFile}/>
                        </label>
                    )}
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