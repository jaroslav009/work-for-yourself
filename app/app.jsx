import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Router, Route, IndexRoute, browserHistory, Switch } from 'react-router-dom';

//Our components:
import Login from './components/login.jsx';
// import Home from './components/home.jsx';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/roster' component={Roster}/>
        <Route path='/schedule' component={Schedule}/>
      </Switch>
    </main>
  );
  

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
)