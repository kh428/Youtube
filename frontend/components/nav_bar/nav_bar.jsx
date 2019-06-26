import React from 'react';
import UserNav from './user_nav';
import UploadDropdown from './upload_dropdown';
import { Link, withRouter } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadDropHidden: true
        };
        this.handleIndexLink = this.handleIndexLink.bind(this);
    }

    toggleUploadDrop() {
        return e => {
            if (this.state.uploadDropHidden) {
                this.setState({ uploadDropHidden: false });
            } else {
                this.setState({ uploadDropHidden: true });
            }
        };
    }

    handleIndexLink() {
        this.props.history.push('/');
    }

    render() {

        const display = this.props.currentUser ? (
            <div>
                <UserNav currentUser={this.props.currentUser} logout={this.props.logout} />
            </div>
        ) : (
            <div>
                <Link to="/login" className="sign-in-link">SIGN IN</Link>
            </div>
        );

        const uploadDrop = this.state.uploadDropHidden ? (<> </>) : (<UploadDropdown props={this.props}/>);

        return (

                <header className="nav-bar">
                    <div className="nav-bar-left-icons">
                        <button className="nav-bar-button" onClick={this.props.toggleSideBar}>
                            <i id="icon" className="fas fa-bars"></i>
                        </button>
                        <img className="logo" src={window.logo}
                            onClick={this.handleIndexLink}
                        />
                    </div>
                    <SearchContainer />
                    <div className="nav-bar-right-icons">
                        <button className="nav-bar-button" onFocus={this.toggleUploadDrop()} onBlur={this.toggleUploadDrop()}>
                            <i id="icon" className="fas fa-video"></i>
                            {uploadDrop}
                        </button>
                        <button className="nav-bar-button">
                            <i id="icon" className="fas fa-ellipsis-v"></i>
                        </button>
                        {display}
                    </div>
                </header>
 
        )
    }

}

export default withRouter(NavBar);
