import React from 'react';

class UserNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        if (this.state.visibility === true) {
            this.setState({visibility: false});
        } else {
            this.setState({visibility: true});
        }
    }

    render() {
        let dropdown;
        let firstName = this.props.currentUser.first_name;
        let lastName = this.props.currentUser.last_name;
        if (this.state.visibility) {
            dropdown = (
                <div className="dropdown-content">
                    <div className="user-info-content">
                        <button className="user-pic-drop">{firstName.slice(0, 1).toUpperCase()}</button>
                        <ul className="user-info">
                            <li className="username">{firstName.slice(0, 1).toUpperCase() +
                                firstName.slice(1) + " " + lastName.slice(0, 1).toUpperCase() + lastName.slice(1)}</li>
                            <li className="email">{this.props.currentUser.email}</li>
                        </ul>
                    </div>
                    <div className="drop-group">
                        <div className="drop-item" onClick={this.props.logout}>
                            <div className="drop-icon">
                                <i className="fas fa-sign-out-alt"></i>
                            </div>
                            <div>Sign Out</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            dropdown = (<div></div>);
        }
        return (
            <div className="dropdown">
                <button className="user-pic" onClick={this.toggleVisibility}>
                    {this.props.currentUser.first_name.slice(0, 1).toUpperCase()}
                </button>
                {dropdown}
            </div>
        )
    }
}

export default UserNav;