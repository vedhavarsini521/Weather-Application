import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import Adminnav from './Adminnav';
import './Get.css'

function Date() {
    const navigate = useNavigate();
    // const [city, setCity] = useState([]);
    const [dt, setDt] = useState([]);

    useEffect(() => {
        // axios.get("http://localhost:8181/city/get")
        axios.get("http://localhost:8181/d/get")
            .then((response) => {
                setCity(response.data); // Update to response.data
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching city data:", error);
            });
    }, []);


    return (
        <div className='backgr'>
            <div className='admbac'>
                {/* <Adminnav /> */}
                <Link to='/' style={{color:'black'}}>Back to home page!!!</Link>
            </div><br></br><br></br>
                <div className="new"style={{paddingBottom:'80px'}}>
                <button onClick={() => navigate('/post')} style={{float:"left",width:'8%',height:'5vh'}}>New Record</button>
                </div>
            <div className='adcontent'>
                <h1 style={{fontSize:"50px",paddingLeft:"30px"}}>Data Operations</h1>
                <h2>Date and Time:</h2>
                <div className='contview'>
                        <thead>
                            <tr>
                                {/* <th>City</th> */}
                                {/* <th>Pincode</th> */}
                                <th>Date</th>
                                <th>Time</th>
                                {/* <th>Temp</th> */}
                                <th>Operations</th>

                            </tr>
                        </thead>
                        <tbody>
                            {city.map((c) => (
                                <tr key={dt.d_id}>
                                    <td>{dt.date}</td>
                                    <td>{dt.time}</td>
                                    {/* <td key={dt.ctId}>{dt.date}</td> */}
                                    {/* <td>6:00</td> */}
                                    {/* <td>28°C</td> */}
                                    <td>
                                        <div className='butsep'>
                                            <button>View</button>
                                            <button>Edit</button>
                                            <button>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                </div>
            </div>
        </div>
    );
}

export default Date;