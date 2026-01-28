import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setUser(data))
  .then(data => console.log(data));
  },[])
  return (
    <div className='users' key={users.id}>
      {users.map((user)=>(
      <div className='user'>
        <h4>{user.name.firstname}{user.name.lastname}</h4>
        <h4>{user.email}</h4>
        <button><Link to={`/users/${user.id}`}>View Details</Link></button>
      </div>
      ))}
    </div>
  )
}

export default About