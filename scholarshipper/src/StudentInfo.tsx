import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import { LinkContainer } from 'react-router-bootstrap';
import Table from 'react-bootstrap/Table';
const { ipcRenderer } = window.require('electron');

function StudentInfo(props) {
  // Get the user_id attached to endpoint and passed from LogItem.js
  // console.log('(Student.tsx) props.location.pathname:', props.location.pathname);
  const getStudentId = () => {
    const endpointArr = props.location.pathname.split('/');
    return endpointArr[endpointArr.length - 1];
  }
  
  const studentId = getStudentId();
  // console.log('studentId (StudentInfo.tsx):', studentId);
    
  const [studentDetails, setStudentDetails] = useState([]);
  useEffect(() => {
    ipcRenderer.send('getStudentDetails', studentId);
    ipcRenderer.on('gotStudentDetails', (event, studentDetails) => {
      console.log('this is student details', studentDetails)
      setStudentDetails({...studentDetails});
    })
  }, []);

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
          <LinkContainer to="/Cohort">
            <button className="btn btn-info btn-lg" aria-disabled="true">View Cohorts</button>
          </LinkContainer>
          <LinkContainer className="login2" to="/Student">
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
            <tr>
              <td>{studentDetails[0].priority}</td>
              <td>{studentDetails[0].first_name}</td>
              <td>{studentDetails[0].school}</td>
              <td>{studentDetails[0].start_year}</td>
              <td>{studentDetails[0].cohort_id}</td>
              <td>{studentDetails[0].notes}</td>
            </tr>
        </Table>
    </div>
  );
} 

export default StudentInfo;