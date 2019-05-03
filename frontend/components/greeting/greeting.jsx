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
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleClick() {
        switch(this.state.dropdown){
            case false:
                this.setState({ dropdown: true });
            break;
            default: 
                this.setState({ dropdown: false });
        }
    }

    handleLogout() {
        this.props.logout().then(() => this.setState( {dropdown: false} ));
    }

    render() {
        let currentUser = this.props.currentUser;
        let logout = this.props.logout;

        const sessionLinks = () => (
        <nav className="login-signup">
                <i className="loginusericon fas fa-user"></i>
            <Link to="/login">SIGN IN</Link>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            
            
            
            <button className="header-name" onClick={this.handleClick}>{currentUser.username.slice(0,1)}
            </button>
            <br />
            
            <div className={this.state.dropdown ? "dropdown" : "hidden"}>
                <p className="userinfodrop">
                    <button className="header-name-drop" onClick={this.handleClick}>{currentUser.username.slice(0, 1)}</button>
                    {currentUser.username}@gmail.com</p>
                <button className="logoutbutton" onClick={this.handleLogout}>
                    <i className="logouticon fas fa-sign-out-alt"></i>
                Log Out</button>
            </div>

        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
    };
}

export default Greeting;