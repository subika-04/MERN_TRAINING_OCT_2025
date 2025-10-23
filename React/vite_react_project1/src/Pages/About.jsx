import React from 'react'
import { FaDownload } from 'react-icons/fa';     
import { Link } from 'react-router-dom'  

const About = () => {
  return (
    <>
    <div className='aboutbox'>
      <div className='about'>
      <h1><span class="glow-text">About Me!</span></h1>
      <h2>I am a <span class="glow-text">Subika S</span></h2>
        <p>
A passionate Software Engineer who loves building innovative digital solutions.
I enjoy crafting beautiful and functional UIs while exploring advanced technologies like the MERN stack.
I aim to create impactful projects that combine creativity, logic, and real-world purpose.<br></br>
<br></br>
<br></br>
        </p>
      </div>
      
    </div>
    <div class="about-content">
      <div className='areas'>
        <h2>Areas of Interest</h2>
        <ul>
          <li>Problem Solving</li>
          <li>UI/UX Design with Figma</li>
          <li>MERNSTACK</li>
        </ul>
      </div>
      <div className='areas'>
        <h2>Education</h2>
        <h3>SRI SHAKTHI INSTITUTE OF
ENGINEERING AND TECHNOLOGY</h3>
        <ul>
          <li>Bachelor of Technology in 
Information Technology</li>
          <li>CGPA:8.38</li>
        </ul>
      </div>
      <div className='areas'>
        <h2>Click here to download</h2>
        <button><Link to='/Home'><FaDownload/>  Resume</Link></button><br></br>
      </div>
    </div>
    </>
  )
}

export default About