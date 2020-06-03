/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import LogItem from './components/LogItem.js';
// import NavBar from './components/NavBar.jsx';

function App() {
  const [logs, setLogs] = useState([
    {
      _id: 1, 
      note: 'This kid is insane',
      priority: 'low',
      user: 'Brian',
      created: new Date().toString(),
    },
    {
      _id: 2, 
      note: 'Smaaaht',
      priority: 'high',
      user: 'Brian',
      created: new Date().toString(),
    },
    {
      _id: 3, 
      note: 'Okay, not too bad',
      priority: 'moderate',
      user: 'Brian',
      created: new Date().toString(),
    },
    {
      _id: 4, 
      note: 'This kid is insane',
      priority: 'low',
      user: 'Brian',
      created: new Date().toString(),
    },

  ])

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Notes</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => {
            //@ts-ignore
            return <LogItem key={log.id} log={log} />
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
