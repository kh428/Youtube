import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.currentUser,
        likes: Object.values(state.entities.likes)
    };
};

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

class Likes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            like: {
                liked: null,
                likeable_type: this.props.likeable_type,
                likeable_id: this.props.likeable_id,
                user_id: this.props.currentUserId
            },
            sumLikes: this.props.sumLikes,
            sumDislikes: this.props.sumDislikes
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.createBar = this.createBar.bind(this);
        this.likeBarStyle = {};
        if (this.props.likeable_type === "Video") {
            this.likeBtnLeft = this.likeBtnRight = "video-like";
            this.dislikesContainer = "dislikes-container";
            this.createBar();
        } else {
            this.likeBtnLeft = "comment-like left";
            this.likeBtnRight = "comment-like";
            this.dislikesContainer = "comment-dislikes-container";
        }
    }


    handleLike(type, likedFeature) {
        if (!this.props.currentUserId) {
            this.props.history.push('/login');
            return;
        }
        //Check if like already exists for current user
        if (likedFeature) {
            if (type === true && likedFeature.liked === true) {
                this.setState({ like: { ...this.state.like, liked: null } }, () => this.props.deleteLike(likedFeature));
                this.setState({sumLikes: --this.state.sumLikes});
            } else if (type === true && likedFeature.liked === false) {
                this.setState({ like: { ...this.state.like, liked: type } }, () => this.props.createLike(this.state.like));
                this.setState({ 
                    sumLikes: ++this.state.sumLikes, 
                    sumDislikes: --this.state.sumDislikes
                });
            } else if (type === false && likedFeature.liked === true) {
                this.setState({ like: { ...this.state.like, liked: type } }, () => this.props.createLike(this.state.like));
                this.setState({
                    sumLikes: --this.state.sumLikes,
                    sumDislikes: ++this.state.sumDislikes
                });
            } else if (type === false && likedFeature.liked === false) {
                this.setState({ like: { ...this.state.like, liked: null } }, () => this.props.deleteLike(likedFeature));
                this.setState({ sumDislikes: --this.state.sumDislikes });
            }
        } else {
            this.setState({ like: { ...this.state.like, liked: type } }, () => this.props.createLike(this.state.like));
            if (type) {
                this.setState({ sumLikes: ++this.state.sumLikes });
            } else {
                this.setState({ sumDislikes: ++this.state.sumDislikes });
            }
        }
        if (this.props.likeable_type === "Video") this.createBar();
    }

    handleSubmit() {
        
        this.props.createLike(this.state);
    }

    createBar() {
        const total = this.state.sumLikes + this.state.sumDislikes;
        const percentage = total === 0 ? 50 : (this.state.sumLikes / total) * 100;
        this.likeBarStyle = {
            width: `${percentage}%`,
        };
    }

    render() {
        const likedFeature = this.props.likes.filter(like => like.likeableType === this.props.likeable_type && like.likeableId === this.props.likeable_id)[0];
        return (
            <>
                <div className={`likes-container ${likedFeature && likedFeature.liked === true ? "selected" : ""}`}>
                    <button className={`${this.likeBtnLeft} like-button`} onClick={() => this.handleLike(true, likedFeature)}><i className="fas fa-thumbs-up"></i></button>
                    {this.state.sumLikes === 0 && this.props.likeable_type === "Comment" ? (<></>) : (
                        <span className="like-amount">{this.state.sumLikes}</span>
                    )}
                </div>
                <div className={`${this.dislikesContainer} ${likedFeature && likedFeature.liked === false ? "selected" : ""}`}>
                    <button className={`${this.likeBtnRight} like-button`} onClick={() => this.handleLike(false, likedFeature)}><i className="fas fa-thumbs-up fa-rotate-180"></i></button>
                    {this.props.likeable_type === "Video" ? (
                        <span className="like-amount">{this.state.sumDislikes}</span>
                    ) : (
                        <></>
                    )}
                </div>
                {this.props.likeable_type === "Comment" ? null : (
                    <div className={`like-bar-container ${likedFeature ? "selected" : ""}`}>
                        <div className="like-bar" style={this.likeBarStyle}>
                        </div>        
                    </div>
                )}
            </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Likes));