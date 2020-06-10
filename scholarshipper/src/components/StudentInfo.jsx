import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/ScholarShipperIcon_.png';
import { LinkContainer } from 'react-router-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const { ipcRenderer } = window.require('electron');

function StudentInfo(props) {
  // Get the user_id attached to endpoint and passed from LogItem.js
  // console.log('(Student.tsx) props.location.pathname:', props.location.pathname);
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const getStudentId = () => {
    const endpointArr = props.location.pathname.split('/');
    return endpointArr[endpointArr.length - 1];
  }
  
  const studentId = getStudentId();
    
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
            <tr>
              <td>{studentDetails.priority}</td>
              <td>{studentDetails.first_name}</td>
              <td>{studentDetails.school}</td>
              <td>{studentDetails.start_year}</td>
              <td>{studentDetails.cohort_id}</td>
              <td>{studentDetails.notes}</td>
            </tr>
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
          <form className="container">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
              <label className="custom-file-label" htmlFor="customFile">{filename}</label>
            </div>
            <input
              type='submit'
              value='Upload'
              className='btn btn-dark btn-large mt-4'
            />
          </form>
        </body>
    </div>
  );
} 

export default StudentInfo;