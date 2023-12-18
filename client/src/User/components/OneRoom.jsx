import React, { useState } from "react";
import { Calendar } from "react-check-in-out-calendar";
import "./cssFiles/OneRoom.css";
import axios from "axios";

const OneRoom = ({ selectRoom, showReservation }) => {
  const [roomType, setRoomType] = useState("Single");
  const [roomView, setRoomView] = useState("City");
  const [meals, setMeals] = useState("Breakfast");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [days,setDays]=useState(1)
 console.log(checkInDate,checkOutDate,'first dates')
  const values = {
    roomType: roomType,
    roomView: roomView,
    meals: meals,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
  };

  const millisecondsInDay = 24 * 60 * 60 * 1000;




  const addReservation = () => {
    axios
      .post("http://localhost:3100/api/hotel/addReservation", values)
      .then((res) => {
        showReservation();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="oneRoom">
      <div>
        <img className="onePicture" src={selectRoom.image} alt="" />
        <h1 className="oneName">{selectRoom.name}</h1>
      </div>
      <div className="select">
        <div className="reservationLabel">
          <label>
            Room Type
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Triple">Triple</option>
              <option value="FamilyRoom">Family Room</option>
            </select>
          </label>
          <label>
            Room View
            <select
              value={roomView}
              onChange={(e) => setRoomView(e.target.value)}
            >
              <option value="City">City View</option>
              <option value="Garden">Garden View</option>
              <option value="Sea">Sea View</option>
            </select>
          </label>
          <label>
            Meals
            <select value={meals} onChange={(e) => setMeals(e.target.value)}>
              <option value="Breakfast">Bed & Breakfast</option>
              <option value="Half">Half Board</option>
              <option value="all">All inclusive</option>
            </select>
          </label>
        </div>
      </div>
      <div className="calendar">
        <Calendar
          mainColor="#ff7045"
          subMainColor="rgba(255, 138, 102, 0.8)"
          startDay={0}
          numMonths={1}
          language="en"
          maximumMonths={12}
          defaultCheckIn={checkInDate}
          defaultCheckOut={checkOutDate}
          onCheckInOutChange={(checkIn, checkOut) => { setDays(Math.floor(new Date(checkOut).getTime()/millisecondsInDay-Math.floor(new Date(checkIn).getTime()/millisecondsInDay)))} 
        }
        />
      </div>
      <div className="total">
        <h4>Total Price:{ console.log(days ,selectRoom)}{parseInt(selectRoom.price)*days}</h4>
      </div>
      <button
        className="BookRoom"
        onClick={() => {
          addReservation();
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default OneRoom;