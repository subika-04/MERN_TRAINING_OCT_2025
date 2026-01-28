import React, { useState } from 'react'
import Parent from '../components/Parent'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Form from '../hooks/Form'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { userContext } from '../App'

const Home = () => {
  const [user,setUser]=useState("Subika S")
  return (
    <div>
      <Link to={"/form"}>Form</Link><br></br>
      <Link to={"/state"}>useState</Link><br></br>
      <Link to={"/reduce"}>useReducer</Link><br></br><br></br>
      <userContext.Provider value={user}>
      <Profile age={21} skills={["HTML","CSS","JS"]} />
      </userContext.Provider>
      <Parent/>
    </div>
  )
}

export default Home