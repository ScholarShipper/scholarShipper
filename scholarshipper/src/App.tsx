import React from 'react';
import './App.css';
import logo from './assets/ScholarShipperIcon_.png';
// import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-wrapper light-blue lighten-3">
          <a className="logo">
            <img src={logo} alt="Logo" height='63' width='63'></img>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
