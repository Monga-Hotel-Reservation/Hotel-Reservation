import React from 'react'
import { Link } from 'react-router-dom';


function Admin() {
  return (
    <nav>
      <ul>
        <li><Link to="/" element={<Admin />}>Home</Link></li>
        <li><Link to="/Create">Create</Link></li>
        <li><Link to="/Log">Log out</Link></li>
      </ul>
    </nav>
  );
}

export default Admin;