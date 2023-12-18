import React from 'react'
import Navbar from '../Navbar'
import Header from '../../header/Header'
import Footer from '../../Lists/Footer'
import './navStyle.css'



function RentCar() {
    return (
        <div className='rentalGlobal'>
            <Navbar/>
           <Header/>

           <div className='contenair'>

           <div class="car-header">
    <h1>Car Rental Program</h1>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Toyota Camry</div>
      <div class="car-details">Sedan | $50 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Ford Explorer</div>
      <div class="car-details">SUV | $70 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Honda Civic</div>
      <div class="car-details">Compact | $40 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Ford Explorer</div>
      <div class="car-details">SUV | $70 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Honda Civic</div>
      <div class="car-details">Compact | $40 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Ford Explorer</div>
      <div class="car-details">SUV | $70 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Honda Civic</div>
      <div class="car-details">Compact | $40 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Ford Explorer</div>
      <div class="car-details">SUV | $70 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

  <div class="car-option">
    <div class="car-info">
      <div class="car-name">Honda Civic</div>
      <div class="car-details">Compact | $40 per day</div>
    </div>
    <button class="rent-button">Rent Now</button>
  </div>

           </div>
           
 

  
           <Footer/>
        </div>
    )
}

export default RentCar
