import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homee from "./pages/Homee";
import Home from "./components/home/home";

import Create from "./pages/Create";
import "./App.css";
import Login from "./components/Authentication/Login.jsx";
import Register from "./components/Authentication/Register.jsx";
import Rooms from "./pages/Rooms";
import { useState } from "react";
import dummy from "./data.js";
import One from "./pages/One.jsx";
import Search from "./pages/Search.jsx";
import Update from "./pages/Update.jsx";
import axios from "axios";
import Reservation from "./pages/Reservation.jsx";
import UserRooms from "./pages/UserRooms.jsx";
import UserOne from "./pages/UserOne.jsx";
import Flights from './components/navbar/navComponents/Flights'
import AirportTaxi from "./components/navbar/navComponents/AirportTaxi";
import RentCar from "./components/navbar/navComponents/RentCar";


function App() {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState ({})





  useEffect(() => {
    axios
      .get("http://localhost:5000/api/rooms/get")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/flight" element={<Flights/>}/>
        <Route path="/airport-taxi" element={<AirportTaxi/>}/>
         <Route path="/rent-cars" element={<RentCar/>}/>       
                             


          <Route element={<Search />}></Route>
          <Route path="/1" element={<Homee role={user.role} />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Create" element={<Create setRefresh={setRefresh} refresh={refresh} />}></Route>
          <Route path="/Login" element={<Login  setUser={setUser} />}></Route>
          <Route path="/rooms" element={ <Rooms setRefresh={setRefresh} refresh={refresh} data={data} />}></Route>
          <Route path="/update" element={<Update setRefresh={setRefresh} refresh={refresh}/>}></Route>
          <Route path="/one" element={<One setRefresh={setRefresh} refresh={refresh}/>}></Route>
          <Route path="/Reservation" element={<Reservation data={data} setRefresh={setRefresh} refresh={refresh} />}></Route>
          <Route path="/UserRooms"element={<UserRooms setRefresh={setRefresh} refresh={refresh} data={data} /> } ></Route>
          <Route path="/OneRoom" element={<UserOne user={user} setRefresh={setRefresh} refresh={refresh}/>}></Route>
          <Route path="UserReservation"   ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
