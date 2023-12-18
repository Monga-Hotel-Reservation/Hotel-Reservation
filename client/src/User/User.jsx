import React, {useState, useEffect} from 'react'
import './User.css'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import Home from './components/Home.jsx'
import Reservation from './components/Reservation.jsx'
import OneRoom from './components/OneRoom.jsx'
import axios from 'axios'

const User = () => {

    const [data, setData] = useState([]);
    const [selectRoom, setSelectRoom] = useState({})
    const [reservation, setReservation] = useState ([])
    const [searchData, setSearchData] = useState ([])
    const [searchInput, setSearchInput] = useState ("")
    const navigate = useNavigate()
  
    useEffect(() => {
      axios.get("http://localhost:3100/api/hotel/allRooms")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
    }, []);
     
    const search=(newData,name)=>{
      axios.get(`https://localhost:3100/api/hotel/search/${name}`).then((res)=>{
        navigate(`/search/${newData.name}`)
        setSearchData(res.data)
      })
    }

    const showRoom=(newData)=>{
      console.log(newData)
        navigate(`/${newData.name}`)
        setSelectRoom(newData)
    }

    const showReservation=(newReservation)=>{
       setReservation(newReservation)
    }

  

    return(
      
        <div>
        <nav>
        <Link to="/" className='HotelName'>Anime Adventure Hotel</Link>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>

                <Link to="/search" onClick={()=>{search(selectRoom.name)}}>Search</Link>
              </li> 
              <li> 
                <input 
                className='searchInput' 
                placeholder='whats your favorite anime' 
                type="text"  
                value={searchInput} 
                onChange={(event)=>{setSearchInput(event.target.value)}}/>
              </li>
              <li>
                <Link to="/reservation">Reservation</Link>
              </li>
              <li>
                <Link to="/">Log out</Link>
              </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home data={data} showRoom={showRoom} />} />
            <Route path="/search/:name" element={<OneRoom data={searchData} />} />
            <Route path="/reservation" element={<Reservation reservation={reservation} />} />
            <Route path="/:name" element={<OneRoom selectRoom={selectRoom} showReservation={showReservation}/>} />
        </Routes>
    
        </div>
       
      )
}

export default User