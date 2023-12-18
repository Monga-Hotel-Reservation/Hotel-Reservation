import React from 'react';
import { Link } from 'react-router-dom';

function User() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/UserRooms">Rooms</Link></li>
        <li><Link to="/Login">Log out</Link></li>
      </ul>
    </nav>
  );
}

export default User;
