import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update() {
        return (e) => {
            this.setState({
                query: e.target.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.query === "") return;
        const searchQuery = this.state.query.split(" ").join("+");
        this.props.history.push(`/results?search_query=${searchQuery}`);
    }

    render() {
        return (
            <div className="search-bar-container">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="search-input"
                        value={this.state.query}
                        onChange={this.update()} 
                    />
                    <button className="search-btn">
                        <i id="search-icon" className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(Search);