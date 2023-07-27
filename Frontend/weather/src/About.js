import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import icon from './imgs/c1-removebg-preview.png';




function About() {

  
  return (
    <div className='abou'>
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
   <div className='abo'>
    <h3>About Us...!</h3>
    <h1>AeroCast</h1>
    <p>Our system constantly monitors temperature using temperature sensor,
         humidity using humidity sensor and also for rain. Our system deals with detecting 
         and gathering various weather parameters at different locations which can be analysed or used for weather forecasting.</p>
         <p>Location Selection: Users can either manually enter their location or allow the
application to access their device's location data to automatically determine their
current location. Alternatively, users can search for a specific location by
entering the city name, ZIP code, or geographic coordinates.
Current Weather Data: The weather forecast app displays the current weather
conditions for the selected location. This includes information such as
temperature, humidity, wind speed and direction, precipitation, and visibility.
The data is often presented using visual icons and textual descriptions.
Hourly and Daily Forecasts: The application provides hour-by-hour and dayby-day weather forecasts for the selected location. Users can view predicted
weather conditions, temperatures, precipitation chances, wind information, and
other relevant details for specific time intervals.
Extended Forecasts: Some weather forecast apps offer extended forecasts that
cover a longer time period, such as a week or even several weeks ahead. These
forecasts give users an overview of expected weather patterns and temperature
trends for planning purposes.
Weather Maps and Radar: Many weather forecast apps include interactive
maps and radar imagery. These maps display weather conditions, such as
temperature, precipitation, cloud cover, and satellite imagery, allowing users to
visualize weather patterns and track the movement of storms or other weather
systems.
Alerts and Notifications: Weather forecast apps often provide severe weather
alerts and notifications. Users can receive alerts for events like thunderstorms,
hurricanes, tornadoes, or other significant weather events in their area.
Notifications can be sent via email, push notifications, or SMS.
Historical Weather Data: Some weather forecast apps offer access to historical
weather data. Users can view past weather conditions for a specific date or time
range, allowing them to analyse trends or compare current weather patterns to
previous years.
Customization: Weather forecast apps may allow users to customize certain
aspects of the display, such as units of measurement (e.g., Celsius or Fahrenheit)
or the preferred time format (e.g., 12-hour or 24-hour clock).
Widgets and Integration: Many weather forecast apps provide widgets or
integration options, allowing users to embed weather information on their
websites, blogs, or personal devices for quick access to weather updates.
Mobile Access: Most weather forecast apps offer mobile versions or dedicated
mobile apps, enabling users to access weather information on their smartphones
or tablets. These mobile apps often include additional features like locationbased alerts and personalized settings</p>

   </div>
   </div>
  );
}

export default About;
