import React, { useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        // Login successful, redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        // Login failed, display error message
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
     <div className="container">
          {/*<div className="caro" >
              
  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src="" class="d-block w-100" alt="..."/>
    </div>
  
  </div><br /><br />
  
  <div className='radius-button'>
  <div class="carousel-indicators">
    <button type="button"></button>
    <button type="button"></button>
    <button type="button"></button>
  </div>
  </div>
  
</div>
    
      </div>*/}
      
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1 id="sign">Sign In</h1>
        <div className="email">
        
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-mail/User Name"
          className='input1'
        />
      </div>
      <div className="password">
        
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className='input2'
       />
      </div>
      <a href="" id="forget">Forget Password</a><br/>
      
     <button className='btn btn-primary'><p id='p'>Sign In</p></button><br />
        <p id="or">or</p>
        <div>
        <img src="./img/google.png"  alt="..." id="img1" />
        <img src="./img/facebook.png"  alt="..." id="img2"/>
        <img src="./img/apple2.png"  alt="..." id="img3"/>
        </div>
        <p id="w">Don’t have an account? Sign up</p>
        
        

        </form>
      </div>
     </div>
    
    
    
    </>  
  );
}

export default Login;
