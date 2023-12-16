import React from 'react';

import { Link } from 'react-router-dom';

function User() {
  return (
    <nav>
      <ul>
        <li><Link to="/" element={<User />}>Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/reser">Reservation</Link></li>
      </ul>
    </nav>
  );
}

export default User;
