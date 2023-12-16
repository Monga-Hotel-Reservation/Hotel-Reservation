import React from 'react';
import User from './User';
import Admin from './Admin';

const Home = ({ role }) => {
  return (
    <div>
      {role === 'admin' ? <Admin /> : <User />}
      <marquee id="m1" >Welcome to Our Hotel</marquee>
      <img src="https://img.freepik.com/premium-photo/hotel-night-view-anime-visual-novel-game-urban-travel-generate-ai_98402-31788.jpg" alt="" />
    </div>
  );
};

export default Home;