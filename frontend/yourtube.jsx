import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

    let preloadedState;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                currentUser: window.currentUser.id
            }
        };
    }

    let store = configureStore(preloadedState);
    const root = document.getElementById('root');

    // //TESTING
    window.store = store;
    // //TESTING

    ReactDOM.render(<Root store={ store }/>, root);
});