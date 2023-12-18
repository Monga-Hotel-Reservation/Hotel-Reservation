import React from 'react'
import Navbar from '../Navbar'
import Header from '../../header/Header'
import Footer from '../../Lists/Footer'
import './navStyle.css'

function Flights() {
    return (
        <div className='flightContenair'>
            <Navbar/>
           <Header/>
           
           <div className='contenair'>

           <div className="schedule-header">
    <h1>Flight Schedule</h1>
  </div>

  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">08:00 AM</div>
      <div className="flight-details">Flight ABC123</div>
    </div>
    <div className="flight-status">On Time</div>
  </div>

  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">11:30 AM</div>
      <div className="flight-details">Flight XYZ456</div>
    </div>
    <div className="flight-status">Delayed</div>
  </div>

  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">03:15 PM</div>
      <div className="flight-details">Flight LMN789</div>
    </div>
    <div className="flight-status">Boarding</div>
  </div>

  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">08:00 AM</div>
      <div className="flight-details">Flight ABC123</div>
    </div>
    <div className="flight-status">On Time</div>
  </div>

  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">11:30 AM</div>
      <div className="flight-details">Flight XYZ456</div>
    </div>
    <div className="flight-status">Delayed</div>
  </div>

  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">03:15 PM</div>
      <div className="flight-details">Flight LMN789</div>
    </div>
    <div className="flight-status">Boarding</div>
  </div>
  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">08:00 AM</div>
      <div className="flight-details">Flight ABC123</div>
    </div>
    <div className="flight-status">On Time</div>
  </div>

  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">11:30 AM</div>
      <div className="flight-details">Flight XYZ456</div>
    </div>
    <div className="flight-status">Delayed</div>
  </div>

  <div className="flight-row">
    <div className="flight-info">
      <div className="flight-time">03:15 PM</div>
      <div className="flight-details">Flight LMN789</div>
    </div>
    <div className="flight-status">Boarding</div>
  </div>

           </div>

  



           <Footer/>
        </div>
    )
}

export default Flights
