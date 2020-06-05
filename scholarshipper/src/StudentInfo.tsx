import React, { useState } from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import { LinkContainer } from 'react-router-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function StudentInfo() {

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   try {
  //     const res = await axios.post('/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     const { fileName, filePath} = res.data;
  //     setUploadedFile({ fileName, filePath });

  //   } catch (err) {
  //     if (err.response.status === 500) {
  //       console.log('Problem')
  //     } else {
  //       console.log(err.res.data.msg);
  //     }
  //   }
  // }


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