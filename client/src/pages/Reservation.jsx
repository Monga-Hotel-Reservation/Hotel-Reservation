import React from 'react'
import { Link } from "react-router-dom";
function Reservation() {
  return (
    <div>
        <h1>helloooo Visitor</h1>
        <h4>Complete Your form</h4>
        <button><Link to="/">Admin</Link> </button>
    </div>
  )
}

export default Reservation