import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const [user,setUser]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/users/${id}`)
         .then(response => response.json())
         .then(data => setUser(data));
    },[id])
  return (
    <div>
        <h3>UserDetails</h3>
        <h4>Email:{user.email}</h4>
        <h4>Username:{user.username}</h4>
        <h4>Password{user.password}</h4>
        <h4>Phone no:{user.phone}</h4>
    </div>
  )
}

export default UserDetails

