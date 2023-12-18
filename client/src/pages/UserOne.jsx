import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calendar } from "react-check-in-out-calendar";
import "./oneRoom.css"
import axios from "axios";
import Update from "./Update";

function UserOne({setRefresh,refresh,user}) {
  console.log(user)
  const location = useLocation();
  const room = location.state.room;


  const[img,setImg]=useState("")
  const [counter, setCounter] = useState(0);
  const [image, setImage] = useState([]);
  const [roomType, setRoomType] = useState(room.type);
  const [roomView, setRoomView] = useState("City");
  const [mealss, setMeals] = useState(room.meals);
  const [checkInAndOut, setCheckInAndOut] = useState({
    checkInDate: new Date() ,
    checkOutDate : new Date()
  });
  const [mealPrice, setMealPrice] = useState(0);
  const [price, setPrice] = useState(room.price);
  const [ref, setRef] = useState(false);
 


  const millisecondsInDay = 24 * 60 * 60 * 1000;



  useEffect(() => {
    axios
      .get(`http://localhost:5000/image/get/${room.id}`)
      .then((res) => {
      
        setImage(res.data);
        console.log("hna one",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const counterImage = () => {
    setCounter((counter) => (counter + 1) % image.length);
  };


  const handleUpdate = (type, meal) => {
    const obj = {
      name: room.name,
      type: type,
      meals: meal,
      price: room.price,
      image: room.image,
    };
    console.log(obj, "the room obj");
    axios
      .put("http://localhost:5000/api/rooms/update/" + room.id, obj)
      .then((result) => console.log("updated"))
      .catch((err) => console.log(err));
  };

  const handleCheckInOutChange = useCallback((checkIn, checkOut) => {
    setCheckInAndOut((prevState) => ({
      ...prevState,
      checkInDate: checkIn,
      checkOutDate: checkOut,
    }));
  }, []); 

  const addReservation = () => {
    const fistIn=new Date(checkInAndOut.checkInDate )
    const lastOut = new Date(checkInAndOut.checkOutDate )
    const objj= {
      users_id: user.id,
      rooms_id : room.id,
      CheckIn: fistIn.getFullYear()+'-'+(fistIn.getMonth()+1)+'-'+fistIn.getDate(),
      CheckOut : lastOut.getFullYear()+'-'+(lastOut.getMonth()+1)+'-'+lastOut.getDate(),
      Total : totalPrice
    }
    console.log(objj)
    axios
      .post("http://localhost:5000/api/reservation/add", {objj})
      .then((res) => {console.log('reservation added')})
      .catch((err) => console.log(err));
  };


  const days= Math.floor(
    new Date(checkInAndOut.checkOutDate).getTime() / millisecondsInDay -
      Math.floor(new Date(checkInAndOut.checkInDate).getTime() / millisecondsInDay))

  const totalPrice = (parseInt(price) + mealPrice) * days;

  return (
    <div className="oneRoom">
      <h2 className="oneName">{room.name}</h2>
      {image.map((el, i) => (
        <div key={i} onClick={counterImage}>
          {i === counter && (
            <img className="onePicture" src={el.imgURL} />
          )}
        </div>
      ))}
      <span className="room-type">Type: {room.type}</span>
      <p className="room-price">Price: {room.price}</p>
      <button>
        <Link to="/UserRooms">Previous</Link>{" "}
      </button>
      <div className="select">
        <div className="reservationLabel">
          <label>
            Room Type
            <select
              value={roomType}
              onChange={(e) => {
                if (e.target.value === "Single") setPrice(room.price * 1);
                else if (e.target.value === "Double")
                  setPrice(room.price * 2);
                else if (e.target.value === "Triple")
                  setPrice(room.price * 3);
                else if (e.target.value === "Family Room")
                  setPrice(room.price * 4);
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
          defaultCheckIn={new Date()}
          defaultCheckOut={new Date()}
          onCheckInOutChange={handleCheckInOutChange}
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
}

export default UserOne;
