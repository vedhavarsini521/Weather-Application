import React, { Component } from 'react';
import './Home1.css';
import { Link } from 'react-router-dom';
import icon from './imgs/c1-removebg-preview.png'; 
import search from './imgs/search1.png';
import cloudy from './imgs/cloudy1.png';
import gif from './imgs/cloudg.gif';
// import radar from './imgs/earth.gif';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Home1 extends Component {
    render(){
		const options = {
			animationEnabled: true,
            backgroundColor: 'white',
            height:250,
            width:400,
            color:"white",
			title: {
				text: "Temperature"
                // fontColor:"white"
			},
			axisY: {
				title: "Temperature (in celsius)",
				suffix: " °C"
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "MMM",
				yValueFormatString: "##0.##°C",
				showInLegend: true,
				// legendText: "",
				dataPoints: [
					{ x: new Date(2023, 0), y: 26},
					{ x: new Date(2023, 1), y: 27 },
					{ x: new Date(2023, 2), y: 28 },
					{ x: new Date(2023, 3), y: 30 },
					{ x: new Date(2023, 4), y: 31 },
					{ x: new Date(2023, 5), y: 32 },
					{ x: new Date(2023, 6), y: 33 },
					{ x: new Date(2023, 7), y: 34 },
					{ x: new Date(2023, 8), y: 35 },
					{ x: new Date(2023, 9), y: 35 },
					{ x: new Date(2023, 10), y: 35 },
					{ x: new Date(2023, 11), y: 35 }
				]
			}]
		}
		
	
  return (
    
     <div className='ho'>
    <div className="home">
      <nav>
        <img className='i1' src={icon} alt="icon" style={{width:'90px',height:'70px'}}></img>
        <div className='h'>
          <li><Link to='/Home1'>Home</Link></li>
          <li><Link to='/Info'>Info</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
          <li><Link to='/LoginForm'>Login</Link></li>
       <li> <Link to='/search'> <img className='bu' src={search} alt='search' style={{width:'20px',height:'20px'}}></img></Link></li>
          </div>
      </nav>
        </div>
       
      <div className='d'>
      <div className='hom6'>
      <div className='hom'>
            <div className='hom1'>
                <h3>Salem</h3>
                <h2>Cloudy</h2>
            </div>
            <div className='hom2'>
                <h1>27°c</h1>
             <img className='hom3' src={cloudy} alt='cloudy' style={{width:'40px',height:'40px'}}></img>
                <p>5:00pm</p>
            </div>
        </div>
        </div>

        {/* <div className='date'>
            <div className='search-cont'>
               
            <button className='search-but'>+</button>
            <input type='text' className="in" placeholder='date'/>
            <button className='search-but'>-</button>
            </div>
            <div className='search-cont'>
            <button className='search-but'>+</button>
            <input type='text' className="in" placeholder='month'/>
            <button className='search-but'>-</button>
            </div>
            <div className='search-cont'>
            <button className='search-but'>+</button>
            <input type='text' className="in" placeholder='year'/>
            <button className='search-but'>-</button>
            </div>
            </div> */}
            </div><br></br>
<div className='d1'>
            <div className='air'>
            <h1>Current info</h1>
            <ul>
                <li>Windspeed: 11km/hr</li><br></br>
                <li>Humidity: 89%</li><br></br>
                <li>Visibility: 8km</li><br></br>
                <li>Precipitation: 2%</li><br></br>
                {/* <li>Discription: Covered with Clouds</li><br></br> */}
            </ul>
            </div>
            <div className='cloud'>
            <img src={gif} alt='gif' style={{width:'300px',height:'300px'}}></img>
            </div>
        </div><br></br>

        <div className='hour-det'>
            <h3>Hourly Forecast</h3>
            <div className='hourly'>
                <div className='sep'>
                <div className='h_det'>
                    <p>6:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>7:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>8:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>9:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>10:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>11:00am</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>12:00pm</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>1:00pm</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
            </div>
        </div><br></br>
        <br></br>
         <div className='hour-det1'>
            <h3>Daily Forecast</h3>
            <div className='hourly1'>
                <div className='sep'>
                <div className='h_det'>
                    <p>Sun</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Mon</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Tue</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Wed</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Thu</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Fri</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                <div className='sep'>
                <div className='h_det'>
                    <p>Sat</p>
                    <p>Sunny</p>
                    <p>30°c</p>
                </div>
                </div>
                
            </div>
        </div><br></br>
        <br></br><br></br>
        <br></br>
        
        <div>
			<CanvasJSChart options = {options}/>
		</div>

        <footer className="footer">
            <h1>Footer</h1>
    </footer>
        </div>
  );
}
}

export default Home1;