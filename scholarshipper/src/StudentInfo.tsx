import React from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import { LinkContainer } from 'react-router-bootstrap';
import Table from 'react-bootstrap/Table';

function StudentInfo() {
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
        <div className="cohortTitle">Student Information</div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <LinkContainer className="padding1" to="/Cohort">
            <button className="btn btn-info btn-lg" aria-disabled="true">View Cohorts</button>
          </LinkContainer>
          <LinkContainer className="padding2" to="/Student">
            <button className="btn btn-secondary btn-lg">Scholarships</button>
          </LinkContainer>
        </div>
        <br></br>
        <Table>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Student Name</th>
              <th>School</th>
              <th>Start Year</th>
              <th>Cohort ID</th>
              <th>Notes</th>
            </tr>
          </thead>
        </Table>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <body>
          <div className="container">
            <form id="image-form">
              <div className="file-field input-field">
                  <input type="file" id="img" />
                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                    placeholder="Upload file"
                  />
                </div>
              </div>
            </form>
            <div className="card output">
              <div className="card-content">
                Output Path: <span id="output-path"></span>
              </div>
            </div>
          </div>
        </body>
    </div>
  );
} 

export default StudentInfo;