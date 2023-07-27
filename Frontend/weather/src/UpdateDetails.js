import React, { useState } from 'react';
import axios from 'axios';
import './PostDetails.css';
// import Adminnav from './Adminnav';

export default function UpdateDetails(){
    const [inputData,setInputData]=useState({});

    const handleChange=(e)=>{
        e.preventDefault();
        const {id,value}=e.target;
        setInputData({...inputData,[id]:value});
        console.log(inputData);
    }

    const handleSubmit = () => {
        axios.post("http://localhost:8181/put/details", inputData);
        //   window.location.reload();
      };


      const handleUpdate = () => {
        axios.put(`http://localhost:8181/put/details/${inputData.id}`, inputData)
          .then((response) => {
            console.log("Data updated successfully:", response.data);
            // Handle success if necessary.
          })
          .catch((error) => {
            console.error("Error updating data:", error);
            // Handle error if necessary.
          });
      };


    return(
        <>
        <div className='adpostbg'>
            <div className='adpostbrng'>
                {/* <Adminnav/> */}
                <h3>For Admin Purpose only</h3>
                <h1>Update the Details</h1>
                <div className='postcont'>
                <div className='citypost'>
                    <div className='c1'>
                    <table>
                        <tbody>
                            <h2>CityDetails</h2>
                            <tr>
                                {/* <th style={{paddingLeft:'2rem'}}>CityId<input type='text' placeholder='CityId' id="cityId" onChange={handleChange}/></th> */}
                                <th className='c2' style={{paddingLeft:'2rem'}}>CityName<input type='text' placeholder='CityName' id="name" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Pincode<input type='text' placeholder='Pincode' id="pcode" onChange={handleUpdate}/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div><br></br><br></br>
                <div className='citypost'>
                <div className='c1'>
                    <table>
                        <tbody>
                            <h2>Date and Time</h2>
                            <tr>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Date<input type='date' placeholder='Date' id="date" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Time<input type='time' placeholder='Time' step="2" id="time" onChange={handleUpdate}/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div><br></br><br></br>
                <div className='citypost'>
                <div className='c1'>
                    <table>
                        <tbody>
                            <h2>Info</h2>
                            <tr>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Humudity<input type='text' placeholder='humidity' id="humidity" onChange={handleUpdate}/></th>
                                <th className='c2' style={{paddingLeft:'2rem'}}>Visibility<input type='text' placeholder='Visibility' id="Visibility" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>WindSpeed<input type='text' placeholder='WindSpeed' id="WindSpeed" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Precipitation<input type='text' placeholder='Precipitation' id="Precipitation" onChange={handleUpdate}/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div><br></br><br></br>
                <div className='citypost'>
                <div className='c1'>
                    <table>
                        <tbody>
                            <h2>Journey</h2>
                            <tr>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Date<input type='date' placeholder='Date' id="date" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Start<input type='text' placeholder='start' id="s_place" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>End<input type='text' placeholder='end' id="e_place" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Place1<input type='text' placeholder='place1' id="p1" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Place2<input type='text' placeholder='place2' id="p2" onChange={handleUpdate}/></th>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div><br></br><br></br>
                <div className='citypost'>
                <div className='c1'>
                    <table>
                        <tbody>
                            <h2>Disaster</h2>
                            <tr>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Disaster<input type='text' placeholder='disaster' id="disaster" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Status<input type='text' placeholder='status' id="status" onChange={handleUpdate}/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div><br></br><br></br>
                <div className='citypost'>
                <div className='c1'>
                    <table>
                        <tbody>
                            <h2>Temperature and Description</h2>
                            <tr>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Celcius<input type='text' placeholder='celcius' id="cel" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Far<input type='text' placeholder='far' id="far" onChange={handleUpdate}/></th>
                                <th className='c2'style={{paddingLeft:'2rem'}}>Description<input type='text' placeholder='desc' id="description" onChange={handleUpdate}/></th>
                               
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div><br></br><br></br>
                <button onClick={handleSubmit}>Put</button>
                </div>
            </div>
        </div>
        </>
    )
}