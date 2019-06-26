import React from 'react';
import { connect } from 'react-redux';
import { updateComment, deleteComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

// const mapStateToProps = state => ({
//     errors: errors.session,
//     formType: "email"
// });

const mapDispatchToProps = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: comment => dispatch(deleteComment(comment))
});


class CommentPopup extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const comment = {
            id: this.props.comment.id,
            body: this.props.comment.body,
            author_id: this.props.comment.authorId,
            video_id: this.props.comment.videoId,
            parent_comment_id: this.props.comment.parentCommentId 
        };
        this.props.deleteComment(comment);
    }


    render() {
        return (
            <div className="comment-popup-container">
                <div className="comment-popup">
                    {/* <div className="comment-popup-item">
                        Edit
                    </div> */}
                    <div className="comment-popup-item" onClick={this.handleDelete}>
                        Delete
                    </div>
                </div>
            </div>
        )
    }

}


export default withRouter(connect(null, mapDispatchToProps)(CommentPopup));