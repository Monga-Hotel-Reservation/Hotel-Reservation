import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({setRole}) {




  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/Login", values)
      .then(res => {
        if (res.data.Status === "Success") {
          axios.get(`http://localhost:5000/getOne/${values.email}`)
          .then((result)=>{
            console.log(result.data[0].role);
            setRole(result.data[0].role)
          })
          navigate("/");
        } else {
          alert(res.data.Error);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <div className="register-container">
        <h2>Sign In</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
          <button type="submit" className="submit-button">
            Login in
          </button>
          <p>You agree to our terms and policies</p>
          <Link to="/register" className="secondary-button">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;