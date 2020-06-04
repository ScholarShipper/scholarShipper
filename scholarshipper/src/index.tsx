import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from "./App";
import Student from "./Student";
import Cohort from "./Cohort";
import StudentInfo from "./StudentInfo";
// import StudentInfo from "./StudentInfo.tsx";

ReactDOM.render(
  <Router>
    <div className="all">
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/Cohort" component={Cohort} />
        <Route path="/Student" component={Student} />
        <Route path="/StudentInfo" component={StudentInfo} />
      </main>
    </div>
  </Router>,
  document.getElementById('root')
);

