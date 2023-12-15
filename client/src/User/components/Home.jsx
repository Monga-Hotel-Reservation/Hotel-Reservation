import React from 'react'
import axios from 'axios'


const Home=({data, showRoom})=>{

   const getOneRoom =(id)=>{
      axios.get(`http://localhost:3100/api/hotel/oneRoom/${id}`).then((res)=>{
         showRoom(res.data[0])
      })
      .catch((err)=>{console.log(err)})
    }

    return(
<div>
 <div className='Welcome'>
    <h1>Welcome</h1>
    <h1>Chose You Favorite Room Now</h1>
 </div>
    <div className='HotelCard'>
        {data.map((e,i)=>(
       <div className='HotelList' key={i} >
          <img className='RoomPicture' src={e.image} alt=''/>
          <h2 className='RoomName'onClick={()=>{getOneRoom(e.rooms_id)}}>{e.name}</h2>  
       </div>
          ))}        
    </div>
</div>
)
        }

export default Home