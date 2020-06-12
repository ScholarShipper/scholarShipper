import React, { useState, useEffect } from 'react';
import logo from '../assets/ScholarShipperIcon_.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import LogItem from './LogItem';
import AddLogItem from './AddLogItem';
import '../App.css';
import { LinkContainer } from 'react-router-bootstrap';
import { v4 as uuidv4 } from 'uuid';
const { ipcRenderer } = window.require('electron');

function Student(props) {
  const [logs, setLogs] = useState([]);
  console.log('logs (state in Student.tsx):', logs);
  // Get the cohort_id attached to endpoint and passed from Card.jsx
  // console.log('(Student.tsx) props.location.pathname:', props.location.pathname);
  const getCohortId = () => {
    const endpointArr = props.location.pathname.split('/');
    return endpointArr[endpointArr.length - 1];
  }

  const cohortId = getCohortId();
  // console.log('cohortId (Student.tsx):', cohortId);

  // Retrieve student records for the particular cohort upon rendering of this component.
  // ipcMain will send back the students data in an array.
  useEffect(() => {
    ipcRenderer.send('getAllStudentsFromACohort', cohortId);
    ipcRenderer.on('gotAllStudentsFromACohort', (event, studentsData) => {
      console.log('studentsData (Student.tsx):', studentsData);

      // Save studentsData to state.
      setLogs([...studentsData]);
    })
  }, []);
  
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    variant: 'success'
  })

  function addItem(item) {
    if (item.note === '' || item.student === '' || item.priority === '') {
      showAlert('Cohort 35 is the G.O.A.T.', 'danger');
      return false
    }
    console.log('item in Student.tsx (addItem()):', item);

    item.user_id = uuidv4()
    item.created_on = new Date().toString();
    setLogs([...logs, item])
    showAlert('Note Added')

    // Send query to db to add student info, along with the proper cohortId.
    const newStudentData = [item.user_id, item.notes, item.first_name, item.priority, item.created_on, cohortId];
    ipcRenderer.send('saveStudent', newStudentData);
  }

  function deleteNote(user_id) {
    console.log('_id in deleteNote:', user_id);
    // Send query to db to delete student info.
    ipcRenderer.send('deleteStudent', user_id);

    setLogs(logs.filter((item) => item.user_id !== user_id))
  }

  function showAlert(message, variant='success', seconds = 3000) {
    setAlert({
      show: true,
      message,
      variant
    })

    setTimeout(() => {
      setAlert({
        show: false,
        message: '',
        variant: 'success'
      })
    }, 3000)
  }
  return (
    <div className="studentApp">
      <div className="bar">
          <LinkContainer className="studentToHome" to="/">
            <button className="btn btn-primary btn-sm">Home</button>
          </LinkContainer>
          <a className="logo2">
            <img src={logo} alt="Logo" height='80' width='80'></img>
          </a>
      </div>
      <br></br>
        <div className="cohortTitle">Scholarship Priority</div>
      <br></br>
      <LinkContainer to="/Cohort">
            <button className="btn btn-info btn-lg" aria-disabled="true">View Cohorts</button>
      </LinkContainer>
    
    <Container className="container">
        <AddLogItem addItem={addItem} />
        {alert.show && <Alert variant="light">{alert.message}</Alert>}
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Notes</th>
            <th>Student</th>
            <th>Created</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => {
            //@ts-ignore
            return <LogItem key={log.id} log={log} deleteNote={deleteNote} />
          })}
        </tbody>
      </Table>
    </Container>
  </div>
  );
}

export default Student;
