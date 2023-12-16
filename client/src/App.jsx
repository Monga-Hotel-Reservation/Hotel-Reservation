import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
import { useState } from "react";
import dummy from "./data.js";
import One from "./pages/One.jsx";
import Search from "./pages/Search.jsx";
import Update from "./pages/Update.jsx";
import axios from "axios";
import Reservation from "./pages/Reservation.jsx";

function App() {
  const [role, setRole] = useState("");
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);





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
  }, [!refresh]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Search />}></Route>
          <Route path="/" element={<Home role={role} />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Create" element={<Create setRefresh={setRefresh} refresh={refresh} />}></Route>
          <Route path="/Login" element={<Login setRole={setRole} />}></Route>
          <Route
            path="/rooms"
            element={
              <Rooms setRefresh={setRefresh} refresh={refresh} data={data} />
            }
          ></Route>
          <Route path="/one" element={<One setRefresh={setRefresh} refresh={refresh}/>}></Route>
          <Route path="/reser" element={<Reservation />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
