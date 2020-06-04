import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from "./App";
import Student from "./Student";

ReactDOM.render(
  <Router>
    <div>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/Student" component={Student} />
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);

