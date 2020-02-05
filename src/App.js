import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h3 style={{textAlign:"center"}}>Welcome to Employee Management page</h3>
    <nav className="navbar navbar-expand-sm bg-dark navbar-light justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/Employee-Details'>Employee Details &nbsp;</Link>
          <Link to='/Add-Employee'>Add Employee  &nbsp;</Link>
          <Link to='/Department-Details'>Department Details &nbsp;</Link>
          <Link to='/Add-Department'>Add Department</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default App;
