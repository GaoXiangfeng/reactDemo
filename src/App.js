import React from 'react';
import './App.css';
import {
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Parent/Child">Parent/Child</Link></li>
        <li><Link to="/FnComponent">fnComponent</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </div>
  );
}

export default App;
