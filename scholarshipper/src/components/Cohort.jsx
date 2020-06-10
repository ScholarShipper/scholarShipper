import React, {useState,useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/ScholarShipperIcon_.png';
import Grid from './Grid.jsx';
import '../App.css';
const { ipcRenderer } = window.require('electron'); 

function Cohort() {
    const [cohortData, setCohortData] = useState([]);

    useEffect(() => {
      // Initiate renderer process to ipcMain to query DB for cohort data.
      ipcRenderer.send('getAllCohorts');
      // Catch the data sent back by ipcMain.
      ipcRenderer.on('gotAllCohorts', (event, cohortData) => {
        setCohortData([...cohortData]);
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
        <div className="cohortTitle">Create Cohort</div>
        <div>
          <br></br>
          <LinkContainer className="login" to="/Student">
            <button className="btn btn-secondary btn-lg">Scholarship Priority</button>
          </LinkContainer>
        </div>
        <br></br>
        <Grid cohortData={cohortData}/>
    </div>
  );
} 

export default Cohort;