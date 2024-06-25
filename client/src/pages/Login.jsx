import React from 'react';

import '../styles/form.css'; 



const Login = () => (
  
  <div className="container" >
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
