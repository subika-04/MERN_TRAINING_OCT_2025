import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div className='Mainbox'>
      <div className='details'>
      <h1>Hi,I am <span class="glow-text">Subika S</span></h1>
      <h2>I am a <span class="glow-text">Software Developer</span></h2>
        <p>
          As an aspiring Software Engineer passionate about building
          creative, efficient, and user-friendly applications.
          Currently pursuing my <b>B.Tech in Information Technology</b>, I love
          exploring new technologies and solving real-world problems through
          code.
        </p>
      </div>
      <div className='pic'>
          <img src="/img.jpg" alt="Subika" className="myimg" />

      </div>
    </div>
    </>
     
  )
}

export default Home