import React, { useState } from "react";
import { Calendar } from "react-check-in-out-calendar";
import "./cssFiles/OneRoom.css";
import axios from "axios";

const UserReservation = ({ selectRoom, showReservation }) => {
  const [roomType, setRoomType] = useState(selectRoom.type);
  const [roomView, setRoomView] = useState("City");
  const [mealss, setMeals] = useState(selectRoom.meals);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [days, setDays] = useState(1);
  const [mealPrice, setMealPrice] = useState(0);
  const [price, setPrice] = useState(selectRoom.price);
  console.log(price, "price");
  const values = {
    roomType: roomType,
    roomView: roomView,
    meals: mealss,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
  };

  const millisecondsInDay = 24 * 60 * 60 * 1000;

  const handleUpdate = (type, meal) => {
    const obj = {
      name: selectRoom.name,
      type: type,
      meals: meal,
      price: selectRoom.price,
      image: selectRoom.image,
    };
    console.log(obj, "the obj");
    axios
      .put("http://localhost:3100/api/hotel/update/" + selectRoom.id, obj)
      .then((result) => console.log("updated"))
      .catch((err) => console.log(err));
  };

  const addReservation = () => {
    axios
      .post("http://localhost:3100/api/hotel/addReservation", {})
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  const totalPrice = (parseInt(price) + mealPrice) * days;
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
              onChange={(e) => {
                if (e.target.value === "Single") setPrice(selectRoom.price * 1);
                else if (e.target.value === "Double")
                  setPrice(selectRoom.price * 2);
                else if (e.target.value === "Triple")
                  setPrice(selectRoom.price * 3);
                else if (e.target.value === "Family Room")
                  setPrice(selectRoom.price * 4);
                setRoomType(e.target.value);
                handleUpdate(e.target.value, mealss);
              }}
            >
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Triple">Triple</option>
              <option value="Family Room">Family Room</option>
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
            <select
              value={mealss}
              onChange={(e) => {
                if (e.target.value === "Bed and Breakfast") setMealPrice(10);
                else if (e.target.value === "Half board") setMealPrice(20);
                else if (e.target.value === "All inclusives") setMealPrice(30);

                setMeals(e.target.value);
                handleUpdate(roomType, e.target.value);
              }}
            >
              <option value="Bed and Breakfast">Bed & Breakfast</option>
              <option value="Half board">Half Board</option>
              <option value="All inclusives">All inclusive</option>
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
          onCheckInOutChange={(checkIn, checkOut) => {
            setDays(
              Math.floor(
                new Date(checkOut).getTime() / millisecondsInDay -
                  Math.floor(new Date(checkIn).getTime() / millisecondsInDay)
              )
            );
          }}
        />
      </div>
      <div className="total">
        <h4>Total Price:{totalPrice}</h4>
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

export default UserReservation;
