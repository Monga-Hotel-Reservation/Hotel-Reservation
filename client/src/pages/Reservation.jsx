import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./reservation.css"

const Reservation = ({data,refresh,setRefresh}) => {
  const [reservations, setReservations] = useState([]);
 const [refReservation,setRefReservation] = useState(false)
  useEffect(
    () => {
      axios
        .get("http://localhost:5000/api/reservation/get")
        .then((result) => {
          console.log(result.data,"reservation rooms");
          setReservations(result.data);
        })
        .catch((error) => console.log(error))
    
      },[refReservation]);
// data (rooms) ///  reservations (idusers,idrooms)
const rservationIds = reservations.map((el)=> el.rooms_id)
console.log(rservationIds, "ids")
      const reservedRooms =  data.filter((el,i)=>{console.log(el.id) ;return rservationIds.includes(el.id)})
 console.log(reservedRooms , 'this rooms')
  return (
    <div>
      <button> <Link to='/1'>Home</Link> </button>
      <h1 className="title">Anime Adventure Hotel</h1> 
      <div className="phrases">
        <div className="phrase-table">
          <div className="phrase-header phrase-row">
            <div className="phrase-data">N° Reservation</div>
            <div className="phrase-data">Room Name</div>
            <div className="phrase-data">Check In</div>
            <div className="phrase-data">Chech Out</div>
            <div className="phrase-data">Room Type</div>
            <div className="phrase-data">Meals</div>
            <div className="phrase-data">Total</div>
            <div className="phrase-data">Option</div>
          </div>
         {reservations.map((el,i)=><div className="phrase-row">
            <div className="phrase-data">{el.id}</div>
            <div className="phrase-data"> {reservedRooms[i].name}</div>
            <div className="phrase-data"> {el.CheckIn} </div>
            <div className="phrase-data"> {el.CheckOut}</div>
            <div className="phrase-data">{reservedRooms[i].type}</div>
            <div className="phrase-data"> {reservedRooms[i].meals}</div>
            <div className="phrase-data"> {el.Total} </div>
            <div className="phrase-data">
              <button type="button" onClick={()=> axios.delete('http://localhost:5000/api/reservation/del/'+el.id)
            .then((result)=>{console.log("deleted");setRefReservation(!refReservation);setRefresh(!refresh)})
            .catch((err)=>console.log(err))
            }>delete</button>
            </div>
          </div>)} 
     
        </div>
      </div>
      </div>
  );
};

export default Reservation;
