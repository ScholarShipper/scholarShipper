import React, { useState } from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import LogItem from './components/LogItem';
import AddLogItem from './components/AddLogItem';
const { ipcRenderer } = window.require('electron');

function Student() {
  const [logs, setLogs] = useState([
    {
      _id: 1, 
      note: 'This kid is insane',
      priority: 'low',
      student: 'Brian',
      created: new Date().toString(),
    },
    {
      _id: 2, 
      note: 'Smaaaht',
      priority: 'high',
      student: 'Brian',
      created: new Date().toString(),
    },
    {
      _id: 3, 
      note: 'Okay, not too bad',
      priority: 'moderate',
      student: 'Brian',
      created: new Date().toString(),
    },
    {
      _id: 4, 
      note: 'This kid is insane',
      priority: 'low',
      student: 'Brian',
      created: new Date().toString(),
    },
  ])

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

    item._id = Math.floor(Math.random() * 90000) + 10000
    item.created = new Date().toString();
    setLogs([...logs, item])
    showAlert('Note Added')
  }

  function deleteNote(_id) {
    setLogs(logs.filter((item) => item._id !== _id))

    ipcRenderer.send('deleteStudent', _id);

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
    <div className="App">
      {/* <div className="bar">
          <a className="logo">
            <img src={logo} alt="Logo" height='63' width='63'></img>
          </a>
      </div> */}
    <Container>
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
