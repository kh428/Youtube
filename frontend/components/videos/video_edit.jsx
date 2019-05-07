import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { listenerCount } from 'cluster';

class VideoEdit extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: this.props.video.title,
            description: this.props.video.description
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
            <form onSubmit={this.handleSubmit}>
            <div>Edit Video</div>
            </form>
        )
    }
}

export default VideoEdit;