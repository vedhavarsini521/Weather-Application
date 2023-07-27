import React from 'react';
import './Login.css';
import { Link ,useNavigate} from 'react-router-dom';
// import './Login.html';
import weather from './imgs/log.gif';
import bg from './imgs/alert.mp4';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import UserLogout from "./Logout";
import { useDispatch } from 'react-redux';
import {login,logout} from './features/user';

const LoginForm = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const user=useSelector(state => state.user.value)
  

  const [errors, setErrors] = useState({});


//   const [content, addContent]=useState([]);
//     useEffect(()=>{
//     axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
//     addContent(response.data);
//   });
// },[])
// const handleNext=()=>{
//   dispatch(login({email}));navigate("/")
// }
// const handleSubmit=(e)=>{
//   e.preventDefault();
//   let flag=false;
//   const error={};
//   if(email.length===0){
//     error.email='Email required';
//     setErrors(error);
//   }
//   if(password.length===0){
//     error.password='Password required';
//     setErrors(error);
//     return;
//   }
//   else{
    
//     content.map((value)=>{
//     if(value.email===email){
//       flag=true;
//       if(value.password===password){
//         handleNext();
//       }
//       else{
//         error.password="Invalid password";
//       }
//     }
//   })
// }
// if(!flag){
//   error.email="Email does not exist";
// }
// setErrors(error);
//   }

const handleNext=()=>{
  dispatch(login({email}));navigate("/")

}
const handleChange = async(e) => {
  e.preventDefault();
try{
const response = await axios.post(
  'http://localhost:8181/api/v1/auth/authenticate',
  {
    email,
    password
  });
  handleNext();
  let token = response.data.token;
  let user = response.data.userResponse;
  localStorage.setItem('token',token);
  localStorage.setItem('user',JSON.stringify(user));
}
catch(error){
  console.error('Error:',error);
}
if(email.length !== 0 && (/$^|.+@.+..+/).test(email) && password.length >= 8){
    handleNext();
}
};

  return (
    <>
    <div className="top1">
      {/* <div className='c1'> */}
      
      <div className="container" >
    <video className='videoTag' autoPlay loop muted>
    <source src={bg} type='video/mp4' />
</video>
      <form>
      <h1>Login</h1>
    

<h3>Username:</h3>
<input type="text" value={email} placeholder="Email" name="email" required onChange={e=>setEmail(e.target.value)}/>
<span style={{color:"red"}}>{email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Enter a valid email" : ""}</span>
<h3>Password</h3>
        <input type="password" placeholder="Password" name="password" required onChange={e=>setPassword(e.target.value)}/><br></br><br></br>
        <button onClick={handleChange} type="submit">Login</button>


        <Link to="/register"><p>Don't have an account,signup!</p></Link>
        <Link to="/home1"><p>Return Back!!</p></Link>
      </form>
      </div>
    
    </div>
      
    </>
  );
};

export default LoginForm;