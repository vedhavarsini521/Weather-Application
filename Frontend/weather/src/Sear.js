import React, { useState } from 'react';
import './Search.css';
import cloudy from './imgs/cloudy1.png';
import rain from './imgs/cloudg.gif';
import wind from './imgs/windspeed1.png';
import humi from './imgs/humidity1.png';
import prei from './imgs/pre1.png';
import visi from './imgs/visibility1.png';
import curricon from './imgs/currenticon.png';
import icon from './imgs/c1-removebg-preview.png';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Sear() {

    const [searchvalue, setSearchValue]=useState('');
    const [ttime, setTime]=useState('');
    const [ddate, setDate]=useState('');
    const [gosearch, setGoSearch]=useState('');
    const [gotime, setGoTime]=useState('');
    const [godate, setGoDate]=useState('');
    const [temp, setTemp]=useState('');
    const [vis, setVis]=useState('');
    const [hum, setHum]=useState('');
    const [wid, setWid]=useState('');
    const [pre, setPre]=useState('');
    const [deg, setDegree]=useState('');

  

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value);
    }
    const onChangeDate = (event) => {
        setDate(event.target.value);
    }
    const onChangeTime = (event) => {
        setTime(event.target.value);
}

const handleGo = () =>{
    setGoSearch(searchvalue)
    setGoDate(ddate)
    setGoTime(ttime)
    axios.post("http://localhost:8181/getTemp", {
"name": gosearch,
"date": godate,
"time": gotime,
})
.then((response) => {
const temp = response.data;
setTemp(temp);
setDegree("C°");
})

.catch((error) => {
    console.error("Error fetching temperature:", error);
  });


axios.post("http://localhost:8181/getInfo", {
"name": gosearch,
"date": godate,
"time": gotime,
})
.then((response) => {
    console.log(response.data)
    const res=(response.data[0]).split(",");
    const vis = res[1];
    setVis(vis);
    const hum = res[0];
    setHum(hum);
    const wid = res[3];
    setWid(wid);
    const pre = res[2];
    setPre(pre);
    // setDegree("C°");

    })

    .catch((error) => {
        console.error("Error fetching weather info:", error);

      });

}
     

  
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
            <input className='sea' type="text" placeholder="Search..." onChange={onChangeSearch} />
      </div>

      <div className='date'>
            <div className='search-cont'>
                <input type='date'  onChange={onChangeDate}></input>
                </div>

            <div className='search-cont'>
                <input type='time' step={2} onChange={onChangeTime}></input>
            </div>

            <button type='submit' className='search-but1' onClick={() => {handleGo(searchvalue,ddate,ttime)}}>Go!</button>

        </div><br></br><br></br>
      <div className='sear'>
      <div className='sear1'>
            <div className='sear2'>
                <h3>{gosearch}    {temp}°c</h3>
                 <p>{godate}</p>
                 <p>{gotime}</p>
                <h2>Cloudy    <img className='sear3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img></h2>
            </div>
        </div><br></br>
        </div>
        

        <div className='sear5'>
           
            <div className='sear6'>
                <div className='sear7'>
                    <h1>Humidity </h1>
                    <h3>{hum}</h3>
                    <img className='sear7img' src={humi} alt='hum' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='sear6'>
                <div className='sear7'>
                    <h1>Visibility</h1>
                    <h3>{vis}</h3>
                    <img className='sear7img' src={visi} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='sear6'>
                <div className='sear7'>
                    <h1>Precepitation </h1>
                    <h3>{pre}</h3>
                    <img className='sear7img' src={prei} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
            <div className='sear6'>
                <div className='sear7'>
                    <h1>Windspeed </h1>
                    <h3>{wid}</h3>
                    <img className='sear7img' src={wind} alt='wind' style={{width:'50px',height:'50px'}}></img>
                </div>
            </div>
        </div>
     </div>
  );
}

export default Sear;
