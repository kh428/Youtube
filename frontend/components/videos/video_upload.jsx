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
          <form onSubmit={this.handleSubmit} className="upLoadPage">
            <div className="publishbuttoncontainer">
              {this.props.formtype === "edit" ? (
                <input
                  className="publishButton"
                  type="submit"
                  value="SAVE"
                />
              ) : (
                <input
                  className="publishButton"
                  type="submit"
                  value="Publish"
                />
              )}
            </div>
            <div className="underpublish">
              <div className="thumbnailbox">
                {this.props.formtype === "edit" ? (
                  this.props.video ? (
                    <img
                      className="displayingThumbnailupdate"
                      src={this.props.video.thumbnail_url}
                    />
                  ) : null
                ) : (
                  <label>
                    <input
                      className="videoUploadButton"
                      type="file"
                      onChange={this.handleFile}
                    />
                  </label>
                )}
              </div>
              <div>
                <div>
                  <div className="titleInputBox">
                    <textarea
                      className="titleInput"
                      type="text"
                      value={this.state.title}
                      onChange={this.handleInput("title")}
                      placeholder="Title"
                    />
                  </div>
                  <div className="descriptionBox">
                    <textarea
                      className="descriptionInput"
                      type="text"
                      value={this.state.description}
                      onChange={this.handleInput("description")}
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div className="thumbnailcontainer">
                  <label className="thumbnailText">
                    Thumbnail (TIFF, JPEG, GIF, PNG)
                  </label>
                  <br />
                  <input type="file" onChange={this.handleThumbnail} />
                </div>
              </div>
              {/* {this.props.formtype === "edit"} */}
              <div className="videoinupdatecontainer">
                {this.props.video ? (
                  <video
                    className="videoItSelfupdate"
                    src={this.props.video.video_url}
                    controls
                  />
                ) : null}
              </div>
            </div>
          </form>
        );
    }
}

export default VideoUpload;