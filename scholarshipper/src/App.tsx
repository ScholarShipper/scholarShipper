import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './assets/ScholarShipperIcon_.png';
import Grid from './components/Grid.jsx';
// const electron = require('electron')
// const path = require('path')
// const BrowserWindow = electron.remote.BrowserWindow
// import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="App">
        <div className="bar">
          <a className="logo">
            <img src={logo} alt="Logo" height='80' width='80'></img>
          </a>
        </div>
        <div>
        <Link className="App-link" to="/Student">Link</Link>
        </div>
    </div>
  );
} 

export default App;