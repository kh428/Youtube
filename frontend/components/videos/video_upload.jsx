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
            <form onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.handleFile}/>
            <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleInput("title")}/>
            </label>

                <label>
                    Description:
            <textarea type="text" value={this.state.description} onChange={this.handleInput("description")} />
                </label>
                <label>
                    thumbnail:
                <input type="file" onChange={this.handleThumbnail} />
                </label>
                <input type="submit" value="submit"/>

            
            </form>
        );
    }
}

export default VideoUpload;