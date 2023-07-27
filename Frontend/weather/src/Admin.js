import React from 'react';
import './Login.css';
import { Link ,useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import bg from './imgs/alert.mp4';
import { useState } from 'react';

import {useSelector} from 'react-redux';
import UserLogout from "./Logout";
import { useDispatch } from 'react-redux';
import {login,logout} from './features/user';

const Admin = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const user=useSelector(state => state.user.value)

 

  return (
    <>
    <div className="top1">
      
      <div className="container" >
    <video className='videoTag' autoPlay loop muted>
    <source src={bg} type='video/mp4' />
</video>
      <form>
      <h1>Admin Login</h1>
    

<h3>Username:</h3>
<input type="text" value={email} placeholder="Email" name="email" required onChange={e=>setEmail(e.target.value)}/>
<h3>Password</h3>
        <input type="password" placeholder="Password" name="password" required onChange={e=>setPassword(e.target.value)}/><br></br><br></br>
        <button onClick={()=> {dispatch(login({email}));navigate("/City")}} type="submit">Login</button>


      </form>
      </div>
    
    </div>
      
    </>
  );
};

export default Admin;