import React from 'react';
import { BrowserRouter as Routes, NavLink } from 'react-router-dom'
import AllRoutes from './routes'
import './index.css'
import 'bulma/css/bulma.css'


function App() {
  return (
    <div>
      <Routes>
        <ul className="main-nav">
          <li>
            <NavLink exact={true} className="green" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/logout">LogOut</NavLink>
          </li>
        </ul>
        <AllRoutes />
      </Routes>
    </div>
  );
}

export default App;
