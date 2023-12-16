import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Update from "./Update";

function One({setRefresh,refresh}) {

  const[img,setImg]=useState("")
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState([]);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const room = location.state.room;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/image/get/${room.id}`)
      .then((res) => {
        setRefresh(!refresh)
        setImage(res.data);
        console.log("hna one",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const counterImage = () => {
    setCounter((counter) => (counter + 1) % image.length);
  };

  const add =(newone)=>{
axios.post("http://localhost:5000/image/add",newone)
.then((res) => {
  setRefresh(!refresh)
  console.log("add",res.data)
}).catch((err)=>{
    console.log(err);
  })
}

  return (
    <div className="one-container">
      <h2 className="room-name">{room.name}</h2>
      {image.map((el, i) => (
        <div key={i} onClick={counterImage}>
          {i === counter && (
            <img className="room-image1" src={el.imgURL} />
          )}
        </div>
      ))}
      <span className="room-type">Type: {room.type}</span>
      <p className="room-price">Price: {room.price}</p>
      <button className="edit-button" onClick={() => setShow(!show)}>
        Edit
      </button>
      {show && <Update room={room.id} />}
      <button>
        <Link to="/rooms">Previous</Link>
      </button>
      <input type="text" placeholder="new pic" onChange={(e)=>setImg(e.target.value)} />
      <button onClick={()=>{
        let newone=({imgURL:img,rooms_id:room.id})
        add(newone)
      }}>add</button>
    </div>
  );
}

export default One;
