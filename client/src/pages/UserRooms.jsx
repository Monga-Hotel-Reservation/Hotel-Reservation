import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
 import "./room.css"
function UserRooms({ data ,setRefresh,refresh}) {
  

  return (
    <div className="HotelCard">
      {data.map((el, i) => (
        <div key={i} className="HotelList">
          <p className="RoomName">{el.name}</p>
          <img className="RoomPicture" src={el.image} alt="" />
          <p className="RoomName"> {el.type} </p>
          <p className="RoomName">{el.meals}</p>
        
          <Link className="RoomName" to="/OneRoom" state={{ room: el }}>
            More details
          </Link>
          
        </div>
      ))}
      <div>
      </div>
    </div>
  );
}

export default UserRooms;
