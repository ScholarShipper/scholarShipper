import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import Grid from './components/Grid.jsx';
import { LinkContainer } from 'react-router-bootstrap';
import Student from './Student';
const { ipcRenderer } = window.require('electron');
// const BrowserWindow = electron.remote.BrowserWindow
// import NavBar from './components/NavBar.jsx';

function App(props) {
  const [cohortData, setCohortData] = useState([]);

  useEffect(() => {
    // Initiate renderer process to ipcMain to query DB for cohort data.
    ipcRenderer.send('getAllCohorts');
    // Catch the data sent back by ipcMain.
    ipcRenderer.on('gotAllCohorts', (event, cohortData) => {
      setCohortData([...cohortData]);
    })
  }, []);
  console.log('this is cohortData in App:',cohortData)
  return (
    <div className="App">
      <div className="bar">
        <a className="logo">
          <img src={logo} alt="Logo" height='80' width='80'></img>
        </a>
      </div>
      <div>
        <br></br>
        {/* <LinkContainer to="/Student">
          <button className="btn btn-info btn-lg">Student Form</button>
        </LinkContainer> */}
      </div>
      <Grid cohortData={cohortData} />
      {/* <Student /> */}
    </div>
  );
} 

export default App;