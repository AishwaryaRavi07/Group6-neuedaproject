import React, { useState } from 'react';
import "../styles/form.css"
import axios from 'axios';
import { Checkbox } from '@mui/material';

const SignUp = () => {
  const [addUser, setAddUser] = useState(" ");
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value , type, checked} = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try{
      const response = await axios.post("http://localhost:8080/auth/register",formData,{
        headers : {
          'Content-Type' : "application/json",
          
        },
      });

      console.log("Success", response.data)
      
    } catch(error){
      console.log(error)
    }
  };

  return (
    <div className="container">
      <div className="title">Registration</div>
      <form onSubmit={handleSubmit}>
        <div className="user__details">
          <div className="input__box">
            <span className="details">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="E.g: John Smith"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input__box">
            <span className="details">Username</span>
            <input
              type="text"
              name="username"
              placeholder="johnWC98"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input__box">
            <span className="details">Email</span>
            <input
              type="email"
              name="email"
              placeholder="johnsmith@hotmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input__box">
            <span className="details">Phone Number</span>
            <input
              type="tel"
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="012-345-6789"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input__box">
            <span className="details">Password</span>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input__box">
            <span className="details">Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="gender__details">
          <span className="gender__title">Gender</span>
          <div className="category">
            <label>
              <Checkbox
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              
              <span>Male</span>
            </label>
            <label>
              <Checkbox
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <span>Female</span>
            </label>
            <label>
              <Checkbox
                type="radio"
                name="gender"
                value="Prefer not to say"
                checked={formData.gender === 'Prefer not to say'}
                onChange={handleChange}
              />
            
              <span>Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className='button' style={{marginLeft:"30vh",marginTop:"2vh"}}>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
