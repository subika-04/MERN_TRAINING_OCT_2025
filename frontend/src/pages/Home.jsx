import React from 'react'
import Parent from '../components/Parent'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Form from '../hooks/Form'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
   
        <Form/>
      <Parent/>
      <Profile name="Subika" age={21} skills={["HTML","CSS","JS"]} />
      <State />
    </div>
  )
}

export default Home