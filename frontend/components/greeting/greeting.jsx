import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         dropdown: false
    //     }
    // }

    // handleClick() {
    //     this.setState({ dropdown: true })
    // }

    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">{currentUser.username}</h2>
            <br />
            <button className="header-button" onClick={logout}>Log Out
                {/* <div className={this.state.dropdown ? "dropdown" : "hidden"}></div> */}
            </button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;