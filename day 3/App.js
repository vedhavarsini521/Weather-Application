import './App.css';
import React from 'react';

import {BrowserRouter, Route, Routes }from 'react-router-dom';
import LoginForm from './LoginForm';
// import Registration from './Registration';
import Register from './Register';
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route index element={<NavBar/>}/>
         
         <Route path="/home" element={<Home/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/LoginForm" element={<LoginForm/>}/>
         <Route path="/register" element={<Register/>}/>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
