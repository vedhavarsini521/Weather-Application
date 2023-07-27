import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

export default function Admin1() {
  return (
    <>
      <div className='adm'>
        <div className='ad1'>
          <Link to='/post'><button>Add</button></Link>
          <Link to='/'><button>View</button></Link>
          <Link to='/put'><button>Update</button></Link>
          <Link to='/p'><button>Delete</button></Link>
        </div>
      </div>
    </>
  );
}
