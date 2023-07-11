import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
// import './Login.html';
import weather from './imgs/g5.gif';

const LoginForm = () => {
  return (
    <>
    <div className="top1">
      {/* <div className='c1'> */}
      <div className="container" >
      <form>
      <h1>Login</h1>
      <h3>Username:</h3>
        <input type="text" placeholder="Email" name="username" required />
        <h3>Password:</h3>
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit">Login</button><break></break>
        <Link to="/register"><p>Don't have an account,signup!</p></Link>
        <Link to="/"><p>Return Back!!</p></Link>
      </form>
      </div>
      {/* <div className='image'>
        <img src={weather} style={{height:'400px',width:'370px'}}></img>
        </div>
      </div> */}
      {/* <div className="side">
          <p>Weather Forecast </p>
          </div> */}
    </div>
      
    </>
  );
};

export default LoginForm;