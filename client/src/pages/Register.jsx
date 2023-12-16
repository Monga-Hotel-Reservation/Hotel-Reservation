import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    Role:""
  });

  const navigate = useNavigate("/")
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/register", values) 
      .then(res => {
        if(res.data.Status === "Success"){
          navigate("/Login")
        } else {
          alert("Error")
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="register-container">
      <h2>Sign up</h2>
      <form className="register-form" onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="fullName"><strong>Name</strong></label>
          <input
            type="text"
            placeholder="Enter name"
            name="fullName"
            value={values.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><strong>Password</strong></label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
        <div className="form-group">
        <label htmlFor="Role"><strong>Role</strong></label>
        <input
            type="text"
            placeholder="Enter Role"
            name="fullName"
            value={values.Role}
            onChange={(e) => setValues({ ...values, Role: e.target.value })}
          />
           </div>
        <button type="submit" className="submit-button">Sign up</button>
        <p>You agree to our terms and policies</p>
        <Link to="/login" className="secondary-button">Login</Link>
      </form>
    </div>
  );
}

export default Register;
