import React from 'react';

class LoadingSpinner extends React.Component {

    render() {
        return (
            <div className="loading-spinner-container">
                <img src={window.spinner} />
            </div>
        )
    }

}

export default LoadingSpinner;