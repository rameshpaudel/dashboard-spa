import React from 'react';
import { BrowserRouter as Routes, Link } from 'react-router-dom'
import AllRoutes from './routes'
import './index.css'
import 'bulma/css/bulma.css'


function App() {
  return (
    <div>
      <Routes>
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <AllRoutes />
      </Routes>
    </div>
  );
}

export default App;
