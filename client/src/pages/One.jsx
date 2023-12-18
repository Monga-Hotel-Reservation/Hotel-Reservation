import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Update from "./Update";
import "./One.css"

function One({setRefresh,refresh}) {

  const[img,setImg]=useState("")
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState([]);

  const [ref, setRef] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const room = location.state.room;
 


  useEffect(() => {
    axios
      .get(`http://localhost:5000/image/get/${room.id}`)
      .then((res) => {
      
        setImage(res.data);
        console.log("hna one",res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const counterImage = () => {
    setCounter((counter) => (counter + 1) % image.length);
  };

  const add =(newone)=>{
axios.post("http://localhost:5000/image/add",newone)
.then((res) => {
  console.log("add",res.data)
 setRef(!ref)
}).catch((err)=>{
    console.log(err);
  })
}

  return (
    <div className="oneRoom">
      <h2 className="oneName">{room.name}</h2>
      {image.map((el, i) => (
        <div key={i} onClick={counterImage}>
          {i === counter && (
            <img className="onePicture" src={el.imgURL} />
          )}
        </div>
      ))}
      <div>
      <span className="OneType">Type: {room.type}</span>
      <p className="OnePrice">Price: {room.price}</p>
      <button className="edit-button" >
        
      <Link to="/update"  state={{ room: room }}  >Edit</Link>
      </button>
      </div>
      
      <div className="add">
      <input type="text" placeholder="new pic" onChange={(e)=>setImg(e.target.value)} />
      <button onClick={()=>{
        let newone=({imgURL:img,rooms_id:room.id})
        add(newone)
      }}>add</button>
      </div>
      
    </div>
  );
}

export default One;
