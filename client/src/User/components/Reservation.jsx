import React from 'react'
import axios from 'axios'
import "./cssFiles/Reservation.css"

const Reservation=({reservation})=>{

    // const [reservationData, setReservationData] = useState([])
    
    // useEffect((id)=>{
    //     axios.get(`http://localhost:3100/api/hotel/reservation/${id}`).then((res)=>{
    //     setReservationData(res.data)})
    
    //     .catch((err) => {
    //         console.error(err);
    //     })
    // },[])

    const removeReservation=(id)=>{
     axios.delete(`http://localhost:3100/api/hotel/deleteReservation/${id}`).then((res)=>{
        console.log("reservation deleted")
     })
     .catch((err)=>{console.log(err)})
    }
    

return(
    <div className='Reservation' >
<table>
    <thead>
        <tr>
            <th>N° Reservation</th>
            <th>Room Name</th>
            <th>Cheak In</th>
            <th>Cheak Out</th>
            <th>Room Type</th>
            <th>Meals</th>
            <th>Total Price</th>
            <th>Delete Reservation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>{reservation.id}</th>
            <th>{reservation.rooms_id}</th>
            <th>{reservation.checkIn}</th>
            <th>{reservation.checkOut}</th>
            <th>{reservation.type}</th>
            <th>{reservation.meals}</th>
            <th>{reservation.Total}</th>
            <th><button className='deleteReservation' onClick={()=>{removeReservation(reservation.id)}}>Delete</button></th>
        </tr>
    </tbody>
</table>
</div>
)
}
export default Reservation