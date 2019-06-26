import React from 'react';
import CommentForm from './comment_form';
import CommentPopup from './comment_popup';
import Likes from '../likes/likes';
import { timeSincePost } from '../../util/format_util';
import { connect } from 'react-redux';
import { fetchComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
    comments: state.entities.comments,
    comment: state.entities.comments[ownProps.commentId] 
});

const mapDispatchToProps = dispatch => ({
    fetchComment: id => dispatch(fetchComment(id))
});


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reply: this.props.reply || false,
            replying: false,
            viewReplies: false,
            showDrop: false,
        };
        this.setReplyingTrue = this.setReplyingTrue.bind(this);
        this.toggleReply = this.toggleReply.bind(this);
        this.toggleChildren = this.toggleChildren.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
    }

    setReplyingTrue() {
        this.setState({ replying: true });
    }

    toggleReply() {
        if (!this.state.replying) {
            this.setState({ replying: true });
        } else {
            this.setState({ replying: false });
        }  
    }

    toggleChildren() {
        if (!this.state.viewReplies) {
            this.setState({ viewReplies: true });
        } else {
            this.setState({ viewReplies: false });
        }  
    }

    toggleDrop() {
        if (this.state.showDrop) {
            this.setState({showDrop: false});
        } else {
            this.setState({showDrop: true});
        }
    }

    renderReplyDropdown() {
        let pluralize = " replies";
        if (this.props.comment.commentIds.length === 1) {
            pluralize = " reply";
        }
        if (this.props.comment.commentIds.length === 0) {
            return (<></>);
        }
        return (
            <div className="reply-dropdown-container">
                <div className="reply-dropdown" onClick={this.toggleChildren}>
                    {!this.state.viewReplies ? (
                        <>
                            <div>View {this.props.comment.commentIds.length} {pluralize}</div>
                            <i id="comment-drop-icon" className="fas fa-angle-down"></i>
                        </>
                    ) : (
                        <>
                            <div>Hide {pluralize}</div>
                            <i id="comment-drop-icon" className="fas fa-angle-up"></i>
                        </>
                    )}
                </div>
            </div>
        )
    }

    render() {
        let commentBody;
        let commentDate;
        let commentAuthor;
        let replies;
        let userPicClass = "user-pic-author";
        let parent = this.props.comment;
        if (this.props.comment) {
            commentBody = this.props.comment.body;
            commentDate = timeSincePost(this.props.comment.createdAt);
            commentAuthor = `${this.props.author.first_name} ${this.props.author.last_name}`;
        } else {
            commentBody = (<></>);
            commentDate = (<></>);
            commentAuthor = (<></>);
        }
        if (this.props.comment.commentIds && !this.state.reply) {
            replies = this.props.comment.commentIds.map((id, index) => {
                if (this.props.comments[id]) {  
                    return (
                        <Comment 
                            key={index}
                            comment={this.props.comments[id]}
                            videoId={this.props.videoId}
                            author={this.props.users[this.props.comments[id].authorId]}
                            users={this.props.users}
                            handler={this.props.handler}
                            currentUser={this.props.currentUser} 
                            createComment={this.props.createComment}
                            reply={true}
                            parent={this.props.comment}
                        />
                    )
                }
            });
        } else {
            replies = (<></>);
        }
        if (this.state.reply) {
            userPicClass = "user-pic-author-replying";
            parent = this.props.parent;
        }
        return (
            <>
            <div className="comment-container">
                <button className={userPicClass}>{commentAuthor.slice(0, 1).toUpperCase()}</button>
                <div className="comment-right">
                    <div className="main-comment">
                        <div className="comment-info">
                            <span className="comment-author">{commentAuthor}</span>
                            <span className="comment-date">{commentDate}</span>
                        </div>
                        <p className="comment-body">
                            {commentBody}
                        </p>
                        <div className="comment-action">
                            {/* PUT A LIKES BUTTON HERE! */}
                            <Likes
                                likeable_type="Comment"
                                likeable_id={this.props.comment.id}
                                sumLikes={this.props.comment.likes}
                                sumDislikes={this.props.comment.dislikes}
                            />
                            {/* <button className="comment-like"><i className="fas fa-thumbs-up"></i></button>
                            <button className="comment-like"><i className="fas fa-thumbs-up fa-rotate-180"></i></button> */}
                            <button className="reply-btn" onClick={this.setReplyingTrue}>REPLY</button>
                        </div>
                    </div>

                    {this.state.replying ? (
                        <CommentForm
                            currentUser={this.props.currentUser}
                            videoId={this.props.videoId}
                            handler={this.handler}
                            history={this.props.history}
                            replying={true}
                            toggleReply={this.toggleReply}
                            toggleChildren={this.toggleChildren}
                            parentCommentId={parent.id}
                            createComment={this.props.createComment}
                            handler={this.props.handler}
                            initialBody={commentAuthor + " "}
                            shouldAutoFocus={true}
                        />
                    ) : (
                        <>
                        </>
                    )}
                    {this.props.comment.commentIds ? (
                        this.renderReplyDropdown()
                    ) : (
                        <></>
                    )}
                </div>
                {(this.props.currentUser && this.props.currentUser.id === this.props.comment.authorId) ? (
                    <div className="comment-action-menu">
                        <div className="action-icon">
                            <button className="nav-bar-button" onFocus={this.toggleDrop} onBlur={this.toggleDrop}>
                                <i id="icon" className="fas fa-ellipsis-v"></i>
                                {this.state.showDrop && this.props.currentUser && this.props.currentUser.id === this.props.comment.authorId ? <CommentPopup comment={this.props.comment} /> : <></>}
                            </button>
                        </div>
                    </div>
                ) : (
                    <></>
                )}      
            </div>
            {this.state.viewReplies ? (
                <div className="replies-container">
                    {replies}
                </div>
            ) : (
                <></>
            )}
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);