import React from 'react'
import { Link } from 'react-router-dom';


function Admin() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Create">Create</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li> <Link to="/Reservation"> Reservation</Link></li>
        <li><Link to="/Login">Log out</Link></li>
      </ul>
    </nav>
  );
}

export default Admin;