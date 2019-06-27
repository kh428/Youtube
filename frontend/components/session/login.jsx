import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailGroup: 'input-group',
            passwordGroup: 'input-group'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
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
            this.setState({[type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user)
            .then(() => this.props.history.push('/'));
    }

    loginDemoUser(e) {
        let demoUser = {
            email: 'demo@gmail.com',
            password: '123123123'
        };
        this.props.login(demoUser)
            .then(() => this.props.history.push('/'));
    }

    makeActive(type) {
        return (e) => {
            if (e.type === "focus") {
                this.setState({[type]: 'input-group active'});
            } else {
                this.setState({ [type]: 'input-group' });
                if (e.target.value !== "") {
                    this.setState({ [type]: 'input-group filled' });
                }
            }
        };
    }

    renderErrors() {
        return(
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
        const errorClass = this.props.errors.length > 0 ? "error-login" : "";
        let form = (
            <form onSubmit={this.handleSubmit}>
                <div id="emailGroup" className={this.state.emailGroup}>
                    <input
                        id="email"
                        className={"user-auth-input login " + errorClass}
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                        onFocus={this.makeActive("emailGroup")}
                        onBlur={this.makeActive("emailGroup")}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div id="passwordGroup" className={this.state.passwordGroup}>
                    <input
                        id="password"
                        className={"user-auth-input login " + errorClass}
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                        onFocus={this.makeActive("passwordGroup")}
                        onBlur={this.makeActive("passwordGroup")}
                    /> 
                    <label htmlFor="password">Enter your password</label>
                </div>
                {this.renderErrors()}
                <div className="demo">
                    Not your computer? Use Guest mode to sign in privately.
                    <div className="demo-user" onClick={this.loginDemoUser}>Sign in as guest</div>
                </div>
                <div className="session-form-submit">
                    <Link to="/signup">Create account</Link>
                    <button className="next-button"> Next </button>
                </div>
            </form>
        )

        return (
            <div className="session-form-container">
                <div className="session-form">
                    <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
                    <h1>Sign in</h1>
                    <h2>to continue to Yourtube</h2>
                    <br />
                    {form}
                </div>
            </div>       
        )
    }
}

export default Login;

