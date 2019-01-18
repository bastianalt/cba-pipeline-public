import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Main} from './app/main';
import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <div className="container-fluid">
      <Route path="/" component={Main}/>
    </div>
  </Router>,
  document.getElementById('root')
);
