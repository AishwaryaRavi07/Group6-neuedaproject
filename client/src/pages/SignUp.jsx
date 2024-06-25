import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container" style={{color:"white",background : "linear-gradient(135deg, rgba(0,36,96,1) 0%, rgba(9,80,190,1) 50%, rgba(0,212,255,1) 100%)"}}>
      <div className="title">Registration</div>
      <form onSubmit={handleSubmit}>
        <div className="user__details">
          <div className="input__box">
            <span className="details">Full Name</span>
            <input
              type="text"
              name="fullName"
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
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              <span className="dot one"></span>
              <span>Male</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              <span className="dot two"></span>
              <span>Female</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Prefer not to say"
                checked={formData.gender === 'Prefer not to say'}
                onChange={handleChange}
              />
              <span className="dot three"></span>
              <span>Prefer not to say</span>
            </label>
          </div>
        </div>
        <div  style={{color:"black"}}>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
