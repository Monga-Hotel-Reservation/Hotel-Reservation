import axios from 'axios'
import './rooms.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Rooms=()=>{

    const [data,setData]=useState([])
    const navigate=useNavigate()
    //fetch rooms
    const getAllrooms=async()=>{
        try{
            const res=await axios.get('http://localhost:5000/api/rooms/get')
    
            setData(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllrooms()
    },[])

    return (
        <div className='roomshome'>
            <h1 className='homeRoomHeading'>Browse Rooms </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
               commodi repudiandae consequuntur voluptatum laborum
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint..</p>
            
            <div className='cardContainer'>

                {data.map((el,i)=>{

                    return (
                        <div class="card" key={i}>
                        <img src={el.image} onClick={()=>{
                                navigate('/login')
                        }}/>
                        <div class="card-content">
                        <h2>{el.name}</h2>
                        <h2>{el.price}$</h2>
                        <p><strong>Type:</strong> {el.type}</p>
                        <p><strong>Meals:</strong> {el.meals}</p>

                        </div>
                        </div> 
                    )
                })}
     
            </div>
            


        </div>
    )
}

export default Rooms