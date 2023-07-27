import React, { useState } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import bg from './imgs/alert.mp4';
import axios from 'axios';


const Register = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = {};

    if (!location) {
      validationErrors.location = 'Please enter your Location';
    }
    if (!name) {
      validationErrors.name = 'Please enter your name';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const data = {
          email,
          name,
          location,
          password,
        };
        await axios.post("http://localhost:8181/api/v1/auth/register", data);
        setOpen(true);
        alert("Registration Successful");
        setEmail('');
        setName('');
        setLocation('');
        setPassword('');
        setLoading(false);
      } catch (e) {
        console.log(e.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className='back-grnd'>
        {/* <div className='c1'> */}

{/* <div className='image'>
        <img src={weather} style={{height:'400px',width:'370px'}}></img>
    </div>
         */}
         {/* <div className='c1'> */}
      <div className='cont'>
      <div className="container" >
    <video className='videoTag1' autoPlay loop muted>
    <source src={bg} type='video/mp4' />
    </video>
       
    <form onSubmit={handleSubmit}>
      <div className='content'>
        <div className='head'>
        <h2>Registration</h2>
        </div>
       
      <div className='inputtt'>
        <label><h3>Email:</h3></label>
        <input type="email"  placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className='inputtt'>
        <label><h3>Username:</h3></label>
        <input type="text"  placeholder="name"  value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className='inputtt'>
        <label><h3>Location:</h3></label>
        <input type="text"  placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        {errors.location && <span className="error">{errors.location}</span>}
      </div>
      <div className='inputtt'>
        <label><h3>Password:</h3></label>
        <input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      
      <div className='but'>
      <Link to='/Home1'><button type="submit" onClick={handleSubmit}> Register</button></Link>
          <Link to="/LoginForm"><p>Already have an account, signin!</p></Link>
          <Link to="/home1"><p>Return Back!!</p></Link>
      </div>
          </div>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Register;

