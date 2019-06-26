import React from 'react';
import CommentForm from './comment_form';
import Comment from './comment';
import LoadingSpinner from '../misc/loading_spinner';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
    comments: state.entities.comments,
});


class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshComments: false
        };
        this.handler = this.handler.bind(this);
    }

    

    handler() {
        this.setState({refreshComments: true});
    }

    render() {
        let comments;
        let commentsLength;
        let commentPlural;

        if (this.props.comments) {
            comments = Object.values(this.props.comments).slice(0).reverse().map((comment, index) => {
                if (comment.parentCommentId === null) {
                    return <Comment 
                        key={index} 
                        commentId={comment.id} 
                        // comments={this.props.comments} 
                        videoId={this.props.videoId} 
                        author={this.props.users[comment.authorId]} 
                        users={this.props.users}
                        currentUser={this.props.currentUser} 
                        createComment={this.props.createComment}
                        handler={this.handler}
                    />
                }
            });
            commentsLength = comments.length;
            if (commentsLength === 1) {
                commentPlural = 'Comment';
            } else {
                commentPlural = 'Comments';
            }
        } else {
            return (<></>);
        }

        return (
            <div className="comments-section-container">
                <div className="comments-section-container">
                    <div className="comments-header">
                        <div className="comment-amount">
                            {`${comments.length} ${commentPlural}`}
                        </div>
                        <CommentForm
                            currentUser={this.props.currentUser}
                            createComment={this.props.createComment}
                            videoId={this.props.videoId}
                            handler={this.handler}
                            history={this.props.history}
                        />
                    </div>
                </div>
                {comments}
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(CommentsSection);