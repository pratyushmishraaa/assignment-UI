import React from 'react'
import "../styling/Navbar.css";
import pic from "../components/assignment pic.jpg"


const Navbar = () => {
  return (
  <>
  
  <div className='nav'>
   <div className='logo'> Coding Masters

   </div>
   <div className='links'>
   <ul>
      <li>Home</li>
      <li>Blog</li>
      <li>Courses</li>
      <li>Contact Us</li>
      <li>Login/Signup</li>
   </ul>
   </div>
 
   </div>
   <div className='body-head'>
   <h2>Education is the key to unlock the golden door of freedom.</h2>
   </div>
   <div className='mid-content'>
   <div className='texts'><h1>Learn to code<br></br>Practice <br />Interview Preparation </h1></div>
   <div className='pic'>
    <img className='photo' src={pic} alt="" />
   </div>


   </div>
   <div className='below-contents'>
   <div className='first'>
    <h2>Javascript</h2> <br />Learn javascript,worlds most <br /> popular language
   </div>
   <div className='second'>
    <h2>React</h2> <br />Learn React. <br /> The World's most popular javascript library.
   </div>

   </div>


  </> 
  )
}

export default Navbar;