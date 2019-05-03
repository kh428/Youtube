import React from 'react';
import { Link } from 'react-router-dom';



// const Greeting = ({ currentUser, logout }) => {

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        switch(this.state.dropdown){
            case true:
                this.setState({ dropdown: false });
            break;
            default: 
                this.setState({ dropdown: true });
        }
    }

    render() {
        let currentUser = this.props.currentUser;
        let logout = this.props.logout;

        const sessionLinks = () => (
        <nav className="login-signup">
                <i class="loginusericon fas fa-user"></i>
            <Link to="/login">SIGN IN</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            
            
            
            <button className="header-name" onClick={this.handleClick}>{currentUser.username.slice(0,1)}
            </button>
            <br />
            
            <div className={this.state.dropdown ? "dropdown" : "hidden"}>
                <p class="userinfodrop">
                    <button className="header-name-drop" onClick={this.handleClick}>{currentUser.username.slice(0, 1)}</button>
                    {currentUser.username}@gmail.com</p>
                <button className="logoutbutton" onClick={logout}>
                    <i className="logouticon fas fa-sign-out-alt"></i>
                Log Out</button>
            </div>

        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
    };
}

export default Greeting;