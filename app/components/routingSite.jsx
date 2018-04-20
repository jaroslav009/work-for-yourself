import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Router, Route, IndexRoute, browserHistory, Switch, BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

//Our components: 
import Login from './loginComponent/login.jsx';
import Home from './home.jsx';
import Error from './error.jsx';

class RoutingSite extends Component {
    render() {
        return (
            <BrowserRouter>
                <Router history={newHistory}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route component="Error"/>
                    </Switch>
                </Router>
            </BrowserRouter>
        )
    }
}

export default RoutingSite;
