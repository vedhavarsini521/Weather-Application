import './App.css';
import React from 'react';

import {BrowserRouter, Route, Routes }from 'react-router-dom';
import LoginForm from './LoginForm';
// import Registration from './Registration';
import Register from './Register';
import NavBar from './NavBar';
// import home from './Home1';
import Home1 from './Home1';
import Contact from './Contact';
import Info from './Info';
import Search from './Search';
import About from './About';
import Nav1 from './Nav1';
import Admin from './Admin';
import Operation from './Operation';
import Sear from './Sear';
import PostDetails from './PostDetails';
import Admin1 from './Admin1';
import UpdateDetails from './UpdateDetails';
import Get from './City';
import AdminFront from './AdminFront';
import City from './City';
import Feedback from './Feedback';


// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route index element={<NavBar/>}/>
         
         <Route path="/Home1" element={<Home1/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/info" element={<Info/>}/>
         <Route path="/LoginForm" element={<LoginForm/>}/>
         <Route path="/register" element={<Register/>}/>
         {/* <Route path="/search" element={<Search/>}/> */}
         <Route path="/aboutus" element={<About/>}/>
         <Route path="/nav1" element={<Nav1/>}/>
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/ope" element={<Operation/>}/>
         <Route path="/sea" element={<Sear/>}/>
         <Route path="/post" element={<PostDetails/>}/>
         <Route path="/put" element={<UpdateDetails/>}/>
         <Route path="/ad" element={<Admin1/>}/>
         <Route path="/City" element={<City/>}/>
         <Route path="/adm" element={<AdminFront/>}/>
         <Route path="/feedback" element={<Feedback/>}/>
         
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
