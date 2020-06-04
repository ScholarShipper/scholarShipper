import React from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import Grid from './components/Grid.jsx';
import { LinkContainer } from 'react-router-bootstrap';

function Cohort() {
  return (
    <div className="cohortApp">
        <div className="bar">
          <LinkContainer className="studentToHome" to="/">
            <button className="btn btn-primary btn-sm">Home</button>
          </LinkContainer>
          <a className="logo3">
            <img src={logo} alt="Logo" height='80' width='80'></img>
          </a>
        </div>
        <br></br>
        <div className="cohortTitle">Create Cohort</div>
        <div>
          <br></br>
          <LinkContainer className="login" to="/Student">
            <button className="btn btn-secondary btn-lg">Scholarships</button>
          </LinkContainer>
        </div>
        <br></br>
        <Grid />
    </div>
  );
} 

export default Cohort;