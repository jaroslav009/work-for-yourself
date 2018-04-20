import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Router, Route, IndexRoute, browserHistory, Switch, BrowserRouter } from 'react-router-dom';

import RoutingSite from './components/routingSite.jsx'

ReactDOM.render(
  <div>
    <RoutingSite/>
  </div>, 
  document.getElementById('app')
)