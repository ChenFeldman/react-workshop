import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {TestRoute} from './TestRoute';
import AppPageComponent from './AppPageComponent';
import {news} from './reducers';

const store = createStore(news,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={() => <AppPageComponent pollInterval={4000} />} />
                    <Route path="/testRoute" component={() => <TestRoute dataToShow='I am the data of the route'/>} />
                </Router>
            </Provider>
        );
    }
}


