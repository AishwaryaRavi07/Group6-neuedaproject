import React from 'react';

import '../App.css'; // Assuming the styles from the links are in App.css



const Login = () => (
  
  <div className="container" style={{color:"white",background : "linear-gradient(135deg, rgba(0,36,96,1) 0%, rgba(9,80,190,1) 50%, rgba(0,212,255,1) 100%)"}}>
    <div className="title">Login</div>
    <form action="#">
      <div className="user__details">
        <div className="input__box">
          <span className="details">Username</span>
          <input type="text" placeholder="johnWC98" required />
        </div>
        <div className="input__box">
          <span className="details">Password</span>
          <input type="password" placeholder="********" required />
        </div>
      </div>
      <div className="button">
        <input type="submit" value="Login" />
      </div>
    </form>
  </div>
);

export default Login;
