import React from 'react';
import './Search.css';
import cloudy from './imgs/cloudy1.png';
import rain from './imgs/cloudg.gif';
import wind from './imgs/windspeed1.png';
import hum from './imgs/humidity1.png';
import pre from './imgs/pre1.png';
import vis from './imgs/visibility1.png';
import curricon from './imgs/currenticon.png';
import icon from './imgs/c1-removebg-preview.png';
import { Link } from 'react-router-dom';



function Search() {


      

  
  return (
      <div className='search'>
        <div className="home">
      <nav>
        <img className='i1' src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='h'>
          <li><Link to='/Home1'>Home</Link></li>
          <li><Link to='/Info'>Journey</Link></li>
          <li><Link to='/Contact'>Report</Link></li>
      </div>
      </nav>
        </div>
         <div className="search-bar">      
            <input className='sea' type="text" placeholder="Search..." />
      </div>

      <div className='date'>
            <div className='search-cont'>
                <input type='date' ></input>
                </div>

            <div className='search-cont'>
                <input type='time'></input>
            </div>
        </div><br></br><br></br>
        {/* <img className='seaimg' src={rain} alt='rain' style={{width:'400px',height:'300px'}}></img> */}
      <div className='sear'>
      <div className='sear1'>
            <div className='sear2'>
                <h3>Coimbatore     27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='sear3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div><br></br>
      <div className='sear1'>
            <div className='sear2'>
                <h3>GandiPuram     27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='sear3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div><br></br>
      <div className='sear1'>
            <div className='sear2'>
                <h3>RS Puram     27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='sear3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div><br></br>
      <div className='sear1'>
            <div className='sear2'>
                <h3>Race Course    27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='sear3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div><br></br>
      <div className='sear1'>
            <div className='sear2'>
                <h3>Kunniyamuthur    27°c</h3>
                {/* <h1>27°c</h1> */}
                <h2>Cloudy    <img className='sear3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
                <p>5:00pm</p>
            </div>
        </div>
        </div>
        

        <div className='sear5'>
            <div className='sear6'>
                <div className='sear7'>
                    <h1>Windspeed </h1>
                    <h3>11km/hr</h3>
                    <img className='sear7img' src={wind} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='sear6'>
                <div className='sear7'>
                    <h1>Humidity </h1>
                    <h3>86%</h3>
                    <img className='sear7img' src={hum} alt='hum' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='sear6'>
                <div className='sear7'>
                    <h1>Visibility</h1>
                    <h3>11km</h3>
                    <img className='sear7img' src={vis} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='sear6'>
                <div className='sear7'>
                    <h1>Precepitation </h1>
                    <h3>2%</h3>
                    <img className='sear7img' src={pre} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
        </div>
            {/* <div className='sear8'>
                <h1>Weather Current Data</h1> */}
                {/* <img className='sear9img' src={curricon} alt='wind' style={{width:'200px',height:'200px'}}></img> */}
            {/* </div> */}
     </div>
  );
}

export default Search;
