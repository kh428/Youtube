import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        const authorId = this.props.currentUser ? this.props.currentUser.id : null;
        const videoId = this.props.videoId;
        let replying;
        let buttonsVisible;
        if (this.props.replying) {
            replying = true;
            buttonsVisible = true;
        } else {
            replying = false;
            buttonsVisible = false;
        }
        this.state = {
            comment: {
                body: this.props.initialBody || "",
                author_id: authorId,
                video_id: videoId,
                parent_comment_id: this.props.parentCommentId || null
            },
            buttonsVisible: buttonsVisible,
            replying: replying,
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.toggleButtons = this.toggleButtons.bind(this);
    }

    handleInput() {
        return (e) => {
            this.setState({comment: {...this.state.comment, body: e.target.value}});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state.comment);
        this.setState({ comment: { ...this.state.comment, body: "" } });
    }

    handleLink() {
        this.props.history.push('/login');
    }

    toggleButtons() {
        if (this.state.buttonsVisible) {
            this.setState({buttonsVisible: false});
            this.setState({ comment: { ...this.state.comment, body: '' } });
        } else {
            this.setState({ buttonsVisible: true });
        }
    }

    inputToggle() {
        return e => {
            if (!this.state.buttonsVisible) {
                this.setState({buttonsVisible: true});
            }
        };
    }

    renderInput() {
        if (this.props.shouldAutoFocus) {
            return (
                <textarea
                    className="comment-textarea"
                    placeholder="Add a public comment..."
                    value={this.state.comment.body}
                    onChange={this.handleInput()}
                    onClick={this.inputToggle()}
                    autoFocus
                >
                </textarea>
            )
        } else {
            return (
                <textarea
                    className="comment-textarea"
                    placeholder="Add a public comment..."
                    value={this.state.comment.body}
                    onChange={this.handleInput()}
                    onClick={this.inputToggle()}
                >
                </textarea>
            )
        }
    }

    render() {
        let userPic;
        let userPicClass;
        let buttonColorClass;
        let buttonText;
        if (this.props.replying) {
            userPicClass = "user-pic-author-replying";
            buttonText = "REPLY";
        } else {
            userPicClass = "user-pic-author";
            buttonText = "COMMENT";
        }
        if (this.props.currentUser) {
            userPic = (<button className={userPicClass}>{this.props.currentUser.first_name.slice(0, 1).toUpperCase()}</button>);
        } else {
            userPic = (<button className={userPicClass}></button>);
        }
        if (this.state.comment.body.length > 0) {
            buttonColorClass = "comment-button"
        } else {
            buttonColorClass = "comment-button-off"
        }
        return (
            <>
            <div className="comment-box-container">
                {userPic}
                <div className="comment-box">
                    <form>
                        <div className="comment-input-box">
                            {this.props.currentUser ? (
                                this.renderInput()
                            ) : (
                                <textarea className="comment-textarea" placeholder="Add a public comment..." onClick={this.handleLink}></textarea>
                            )}
                            <div className="comment-input-underline-container">
                                <div className="comment-input-underline">
                                </div>
                            </div>
                        </div>
                        {this.props.currentUser && this.state.buttonsVisible ? (
                            <div className="comment-button-row">
                                {this.state.replying ? (
                                    <button type="button" className="cancel-button" onClick={this.props.toggleReply}>CANCEL</button>
                                ) : (
                                    <button type="button" className="cancel-button" onClick={this.toggleButtons}>CANCEL</button>
                                )}
                                {this.state.comment.body === '' ? (
                                    <button className={buttonColorClass}>{buttonText}</button>
                                ) : (
                                    <button onClick={this.handleSubmit} className={buttonColorClass}>{buttonText}</button>
                                )}
                            </div>
                        ) : (
                            <></>
                        )}
                    </form>
                </div>
            </div>
            </>
        )
    }
}

export default withRouter(CommentForm);