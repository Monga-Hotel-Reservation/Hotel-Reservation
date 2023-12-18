import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./room.css"
  
function Rooms({ data ,setRefresh,refresh}) {
  const del = (id) => {
    axios
      .delete(`http://localhost:5000/image/del/${id}`)  /// ADMIN
      .then((res) => {
        console.log("images deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .delete(`http://localhost:5000/api/rooms/del/${id}`)
      .then((res) => {
        console.log("deleted", res.data);
        setRefresh(!refresh)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="HotelCard">
      {data.map((el, i) => (
        <div key={i} >
          <div className="HotelList">
          <p className="RoomName">{el.name}</p>
          <img className="RoomPicture" src={el.image} alt="" />
          <p className="RoomName"> {el.type} </p>
          <p className="RoomName">{el.meals}</p>
          <Link className="RoomName"  to="/one" state={{ room: el }}>
            More details
          </Link>
          </div>
          <button
            onClick={() => {
              del(el.id);
            }}
          >
            Delete
          </button>
          
        </div>
      ))}
      <div>
      
      </div>
    </div>
  );
}

export default Rooms;
