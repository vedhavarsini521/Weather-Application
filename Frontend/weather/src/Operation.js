import React from 'react';
import './Operation.css';


function Operation() {

  return (
    <div className='operation'>
      <div className='operat'>
        <form className='op1'>
            <h2>Location</h2>
            <input className='o1' type='text' placeholder='place' name='City' />
            <h2>Date</h2>
            <input className='o1' type='text' placeholder='date' name='Date' />
            <h2>Temperature</h2>
            <input className='o1' type='text' placeholder='Temp' name='Temp' />
            <h2>Description</h2>
            <input className='o1' type='text' placeholder='Desc' name='desc' /><br></br><br></br>
            <div className='opbut'>
      <button type="submit">Post</button>
      </div>
        </form>
      </div>
      </div>
  );
}

export default Operation;
