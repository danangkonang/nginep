
import React, { Component } from 'react';
import Routes from './src/Routes';
import {Provider} from 'react-redux'
import store from './src/redux/Store'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        )
    }
}





