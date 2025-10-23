import React from 'react'
import { Link } from "react-router-dom"
import { FaHome, FaUserAlt, FaProjectDiagram, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
  return (
    <>
    <div className='link'>
      <div className='glow-text' id="port">Portfolio</div>
      <div className='navlist'>
      <Link to='/'><FaHome />   Home</Link><br></br>
      <Link to='/About'><FaUserAlt/>  About</Link><br></br>
      <Link to='/Skills'><FaCode/>    Skills</Link><br></br>
      <Link to='/Projects'><FaProjectDiagram/>  Projects</Link><br></br>
      <Link to='/Contact1'><MdEmail/>  Contact</Link><br></br>
      </div>
    </div>
     </>
  )
}

export default Navbar