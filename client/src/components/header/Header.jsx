import './header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCar, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header=()=>{
 

    const navigate=useNavigate()

    return (
       <div className='header'>
            <div className='headerContainer'>
                <div className='headerList'>
                    
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type='text' placeholder='What is your favorite anime..?'
                        className='headerSearchInput'/>
                    </div>
                
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>

                            <div className="headerListItem" onClick={()=>{
                            
                            navigate('/')
                            
                            }}>
                                <div>
                                <FontAwesomeIcon icon={faBed} />
                                <span>Stays</span>
                                </div>
                                
                            </div>

                            <div className="headerListItem" onClick={()=>{
                           
                            navigate('/flight')

                            }}>
                                <div>
                                <FontAwesomeIcon icon={faPlane} />
                                <span>Flights</span>
                                </div>
                               
                            </div>

                            <div className="headerListItem" onClick={()=>{
                         
                            navigate('/rent-cars')
                            }}>
                                <div>
                                <FontAwesomeIcon icon={faCar} />
                                <span>Car rentals</span>
                                </div>
                                
                            </div>

                            <div className="headerListItem" onClick={()=>{
                        
                            navigate('/airport-taxi')
                            }}>
                                <div>
                                <FontAwesomeIcon icon={faTaxi} />
                                <span>Airport Taxis</span>
                                </div>
                                
                            </div>
                                                
                        </div>
                <h1 className="headerTitle">Come Home To Your <span style={{color:'rgb(164, 17, 17)'}}>Dream!</span></h1>
                <p className="headerDesc">"Embark on an Anime Odyssey of Luxury and Comfort at Monga-Reservation! Immerse yourself in a world where impeccable service meets whimsical charm..!</p>

            </div>
       </div>
    )
}

export default Header