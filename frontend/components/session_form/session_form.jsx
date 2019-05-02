import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        this.props.processForm({
            username: "Guest",
            password: "123123123"
        });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let demologin = null;
        if (this.props.formType === 'Log In') {
        demologin = (
            <button className="demo-submit" onClick={this.handleDemoSubmit}>
                <span>Demo User Login</span>
            </button>
        )
    }
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <img src="https://www.festisite.com/static/partylogo/img/logos/google.png" alt=""/>
                    <br />
                        <div className="signinfont">
                        Sign In 
                        </div>
                    <br />
                        to continue to YourTube
                    <br />
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                            <label>Username:
                                <br />
                                <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input" placeholder="email"/>
                            </label>
                        <br />
                            <label>Password:
                                <br />
                                <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" placeholder="password"/>
                            </label>
                        <br />
                            <div className="createandlogin">
                                {this.props.navLink}
                            <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
                    </div>
                        {demologin}
                </form>
            </div>
        );
    }
}

export default SessionForm;