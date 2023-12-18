import axios from 'axios';
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Create({setRefresh,refresh}) {


  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [type, setRoomtype] = useState('');
  const [meals, setMeals] = useState('');
  const [price, setPrice] = useState('');


  const add =(obj)=>{
    axios.post("http://localhost:5000/api/rooms/add",obj).then((res)=>{
     setRefresh(!refresh)
      console.log("added")

    }).catch((err)=>{
      console.error(err);
    })
  }

  return (
    <div>
      <form className="create-form">
      <input
          type="text"
          className="form-input"
          placeholder="Room name"
          onChange={(e) => setName(e.target.value)}
        />
           <input
          type="text"
          className="form-input"
          placeholder="Room image"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Room Type"
          onChange={(e) => setRoomtype(e.target.value)}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Meals"
          onChange={(e) => setMeals(e.target.value)}
        />
        <input
          type="number"
          className="form-input"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="form-button" onClick={()=>{
          let obj =({name:name,image:image,type:type,meals:meals,price:price})
          add(obj)
        }}>
          <Link to="/rooms">Add</Link>   
        </button>
      </form>
    </div>
  );
}

export default Create;
