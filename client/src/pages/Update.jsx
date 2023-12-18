import axios from "axios";
import React, { useState } from "react";
import { useLocation, Link ,useNavigate } from "react-router-dom";
import "./Update.css"

function Update({setRefresh,refresh}) {
  const location = useLocation();
  const room = location.state.room;

  const [namee, setName] = useState(room.name);
  const [imagee, setImage] = useState(room.image);
  const [typee, setType] = useState(room.type);
  const [mealss, setMeals] = useState(room.meals);
  const [pricee, setPrice] = useState(room.price);
  console.log(room.id)

  const nagivate=useNavigate()
  const handleEdit = () => {
    axios
      .put("http://localhost:5000/api/rooms/update/"+room.id, {
        name: namee,
        image: imagee,
        type: typee,
        meals: mealss,
        price: parseInt(pricee),
      })
      .then((result) => {setRefresh(!refresh);console.log("updated");nagivate('/rooms')})
      .catch((err) => console.log(err));
  };

  return (
    <div className="update">
      <div>
      <input
        type="text"
        value={namee}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div>
      <input
        type="text"
        value={imagee}
        onChange={(e) => setImage(e.target.value)}
      />
      </div>
      <div>
      <input
        type="text"
        value={typee}
        onChange={(e) => setType(e.target.value)}
      />
      </div>
      <div>
      <input
        type="text"
        value={mealss}
        onChange={(e) => setMeals(e.target.value)}
      />
      </div>
      <div>
      <input
        type="text"
        value={pricee}
        onChange={(e) => setPrice(e.target.value)}
      />
      </div>
      <button onClick={() => handleEdit()}>update</button>
    </div>
  );
}

export default Update;
