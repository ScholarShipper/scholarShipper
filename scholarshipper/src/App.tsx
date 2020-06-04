import React from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import Grid from './components/Grid.jsx';
import { LinkContainer } from 'react-router-bootstrap';
import Student from './Student'
// const electron = require('electron')
// const path = require('path')
// const BrowserWindow = electron.remote.BrowserWindow
// import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="App">
        <div className="bar">
          <div className="helloText">ScholarShipper</div>
          <div className="helloTextSmall">...to college and beyond</div>
          <a className="logo">
            <img src={logo} alt="Logo" height='150' width='150'></img>
          </a>
        </div>

        <div>
          <br></br>
          <LinkContainer className="login" to="/Student">
            <button className="btn btn-info btn-lg">Admin Login</button>
          </LinkContainer>
        </div>
        {/* <Grid /> */}
        {/* <Student /> */}
    </div>
  );
} 

export default App;