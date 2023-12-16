import React, { useState } from "react";
import { Link } from "react-router-dom";
import Update from "./Update";
import One from "./One";
import axios from "axios";

function Rooms({ data }) {
  const del = (id) => {
    axios
      .delete(`http://localhost:5000/image/del/${id}`)
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="rooms-container">
      {data.map((el, i) => (
        <div key={i} className="room-item">
          <p className="room-name">{el.name}</p>
          <img className="room-image" src={el.image} alt="" />
          <p className="room-name"> {el.type} </p>
          <p className="room-name">{el.meals}</p>
          <button
            onClick={() => {
              del(el.id);
            }}
          >
            Delete
          </button>
          <Link to="/one" state={{ room: el }}>
            More details
          </Link>
        </div>
      ))}
      <div>
        <button>
          <Link to="/">Previous</Link>
        </button>
      </div>
    </div>
  );
}

export default Rooms;
