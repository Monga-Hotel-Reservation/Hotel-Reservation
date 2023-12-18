import React from 'react';
import User from './User';
import Admin from './Admin';

const Homee = ({ role }) => {


  
  return (
    <div>
      {role === 'admin' ? <Admin /> : <User />}
      <marquee id="m1" >Welcome to Our Hotel</marquee>
    </div>
  );
};

export default Homee;