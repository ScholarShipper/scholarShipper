import React from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
import Student from './Student'
// const electron = require('electron')
// const path = require('path')
// const BrowserWindow = electron.remote.BrowserWindow
// import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="App">
        <div className="bar">
          <a className="logo">
            <img src={logo} alt="Logo" height='63' width='63'></img>
          </a>
        </div>
        <Student />
    </div>
  );
} 

export default App;