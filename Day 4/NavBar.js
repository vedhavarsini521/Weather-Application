import React from 'react';
import './NavBar.css';
import icon from './imgs/c1-removebg-preview.png';
import {Link} from 'react-router-dom'; 

function NavBar() {
  return (
    <div className='na'>
    <div className="App">
      <nav>
        <img src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='ele'>
          <li><Link to='/Home1'>Home</Link></li>
          <li><Link to='/Info'>Info</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/LoginForm'>Login</Link></li>
        </div>

      </nav>
      <header>
        <h1>Weather Forecast</h1>
        {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Travel On")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You!!!")
                        .deleteAll()
                        .typeString("Start You Journey")
                        .deleteAll()
                        .typeString("Life is short, and the world is wide!!!")
                        .start();
                }}
            /> */}
      </header>
      <div className='noti'>
        <p>Allow the application to access your device location</p>
        <Link to='/Home1'><button onClick  id='l1' type="submit">Allow</button></Link>
        <Link to='/Home1'><button id='l2' type="submit">cancel</button></Link>
    </div>

    </div>
    </div>
  );
}

export default NavBar;
