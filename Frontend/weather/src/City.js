import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import Adminnav from './Adminnav';
import './Get.css'

function City() {
    const navigate = useNavigate();
    const [city, setCity] = useState([]);
    const [dt, setDt] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8181/city/get")
        // axios.get("http://localhost:8181/d/get")
            .then((response) => {
                setCity(response.data); // Update to response.data
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching city data:", error);
            });
    }, []);

    const navigation = useNavigate();
        const deletecontent = (c_id) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8181/city/${c_id}`)
            .then((res) => {
              alert('Record Deleted');
              navigation('/City');
              window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };

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
                <h2>City Details:</h2>
                <div className='contview'>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Pincode</th>
                                {/* <th>Date</th> */}
                                {/* <th>Time</th> */}
                                {/* <th>Temp</th> */}
                                <th>Operations</th>

                            </tr>
                        </thead>
                        <tbody>
                            {city.map((c) => (
                                <tr key={c.c_id}>
                                    <td>{c.name}</td>
                                    <td>{c.pcode}</td>
                                    {/* <td key={dt.ctId}>{dt.date}</td> */}
                                    {/* <td>6:00</td> */}
                                    {/* <td>28°C</td> */}
                                    <td>
                                        <div className='butsep'>
                                            <Link to='/post'><button>Add</button></Link>
                                            {/* <button>Edit</button>
                                            <button>Delete</button> */}
                                            <button id='three' onClick={() => deletecontent(c.c_id)}>Delete</button>
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

export default City;