import React,{useState} from 'react';
import axios from 'axios';

import '../styles/form.css'; 

const Login = () => {
  const [formData, setFormData] = useState({  
    username: '',
    password: '',   
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try{
      const response = await axios.post("http://localhost:8080/auth/login",formData,{
        headers : {
          'Content-Type' : "application/json",        
        },
      });
  
      console.log("Success", response.data)
      
    } catch(error){
      console.log(error)
    }
  };

  return(
  
  <div className="container" >
    <div className="title">Login</div>
    <form onSubmit={handleSubmit}>
      <div className="user__details">
        <div className="input__box">
          <span className="details">Username</span>
          <input type="text" name='username' onChange={handleChange} value={formData.username} placeholder="johnWC98" required />
        </div>
        <div className="input__box">
          <span className="details">Password</span>
          <input type="password" name='password' onChange={handleChange} value={formData.password} placeholder="********" required />
        </div>
      </div>
      <div className="button">
        <input type="submit" value="Login" />
      </div>
    </form>
  </div>
  )
};

export default Login;
