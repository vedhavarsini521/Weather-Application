import React from 'react';
import './NavBar.css';
import icon from './imgs/c1-removebg-preview.png';
import {Link} from 'react-router-dom'; 
import {useSelector} from 'react-redux';
import UserLogout from "./Logout";
import { useState } from 'react';

function Nav1() {
  // const user=useSelector(state => state.user.value)

  const user = useSelector(state => state.user.value);
  const [location, setLocation] = useState('');
  const [errors, setErrors] = useState({});

  function handleLocationChange(event) {
    setLocation(event.target.value);
    setErrors({});
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = {};

    if (!location.trim()) {
      validationErrors.location = 'Please enter a valid location';
      
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Valid location:', location);
    }
  }

  return (
    <div className='na'>
    <div className="App">
      <nav>
        
        <img src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='ele'>
          {/* <li><Link to='/Home1'>Home</Link></li> */}
          {/* <li><Link to='/Info'>Journey</Link></li> */}
          {/* <li><Link to='/Contact'>Report</Link></li> */}
          <li><Link to='/aboutus'>AboutUs</Link></li>
          {/* <li><Link to='/LoginForm'>Login</Link></li> */}
        </div>
          <div className='log'>
          {!user.email?
          <Link to='/LoginForm'>Login/SignUp</Link>  :
          <h4 style={{color:'white'}}>{user.email}<UserLogout/></h4>
        }
        </div>

      </nav>
      </div>
      <header>
        <h1>AeroCast</h1>
      </header>
      <div className='noti'>
      <p>Enter the default location!!!</p>
          <form onSubmit={handleSubmit}>
          <input
            className='loc'
            name='loc'
            type="text"
            placeholder="Location..."
            value={location}
            onChange={handleLocationChange}
            required
          />
          {errors.location && <span className="error">{errors.location}</span>}
          <br></br><br></br>
          <Link to='/Home1'><button className='bu1' onClick={handleSubmit} id='l1' type="submit">Submit</button></Link><br></br><br></br>
          <Link to='/'><button className='bu1' id='l2' type="button">cancel</button></Link>
        </form>
    </div>

    
    </div>
  );
}

export default Nav1;




