import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            firstNameGroup: 'input-group-signup',
            lastNameGroup: 'input-group-signup',
            emailGroup: 'input-group-signup',
            passwordGroup: 'input-group-signup'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.makeActive = this.makeActive.bind(this);
    }

    componentDidMount() {
        document.body.style.backgroundColor = "white";
    }

    componentWillUnmount() {
        this.props.clearErrors();
        document.body.style.backgroundColor = null;
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };
        this.props.createNewUser(user)
            .then(() => this.props.history.push('/'));
    }

    makeActive(type) {
        return (e) => {
            if (e.type === "focus") {
                this.setState({ [type]: 'input-group-signup active' });
            } else {
                if (e.target.value !== "") {
                    this.setState({ [type]: 'input-group-signup filled' });
                } else {
                    this.setState({ [type]: 'input-group-signup' });
                }
            }
        };
    }

    renderErrors() {
        return (
            <ul className="error-list">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        <i className="fas fa-exclamation-circle"></i>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const errorClass = this.props.errors.length > 0 ? "error-signup" : "";
        return (
            <div className="session-form-container">
                <div className="create-user">
                    <div className="create-user-left">
                        <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                        <h1>Create your Yourtube Account</h1>
                        <form onSubmit={this.handleSubmit} className="create-user-form">
                            <div>
                                <div className="full-name-inputs">
                                    <div id="firstNameGroup" className={this.state.firstNameGroup}>
                                        <input 
                                            id="firstName"
                                            className={"create-user-input " + errorClass}
                                            type="text" 
                                            value={this.state.first_name}
                                            onChange={this.handleInput("first_name")}
                                            onFocus={this.makeActive("firstNameGroup")}
                                            onBlur={this.makeActive("firstNameGroup")}
                                        />
                                        <label htmlFor="firstName">First name</label>
                                    </div>
                                    <div id="lastNameGroup" className={this.state.lastNameGroup}>
                                        <input
                                            id="lastName"
                                            className={"create-user-input " + errorClass}
                                            type="text"
                                            value={this.state.last_name}
                                            onChange={this.handleInput("last_name")}
                                            onFocus={this.makeActive("lastNameGroup")}
                                            onBlur={this.makeActive("lastNameGroup")}
                                        />
                                        <label htmlFor="lastName">Last name</label>
                                    </div>
                                </div>
                                <div>
                                    <div id="emailGroup" className={this.state.emailGroup}>
                                        <input
                                            id="email"
                                            className={"create-user-input " + errorClass}
                                            type="text"
                                            value={this.state.email}
                                            onChange={this.handleInput("email")}
                                            onFocus={this.makeActive("emailGroup")}
                                            onBlur={this.makeActive("emailGroup")}
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div>
                                    <div id="passwordGroup" className={this.state.passwordGroup}>
                                        <input
                                            id="password"
                                            className={"create-user-input " + errorClass}
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.handleInput("password")}
                                            onFocus={this.makeActive("passwordGroup")}
                                            onBlur={this.makeActive("passwordGroup")}
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="password-hint">
                                    Use 6 or more characters
                                </div>
                                {this.renderErrors()}
                                <div className="create-user-form-submit">
                                    <Link to="/login" >Sign in instead</Link>
                                    <button className="next-button"> Next </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                    <figure className="image-placeholder">
                        <img src={window.signUpLogo}/>
                        {/* <button></button> */}
                        <figcaption>One Account. All of Yourtube working for you.</figcaption>
                    </figure>
                    
                </div>
            </div>
        )
    }
}

export default Signup;