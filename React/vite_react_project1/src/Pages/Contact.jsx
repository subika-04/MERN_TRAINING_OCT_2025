import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [form,setForm]=useState({
    name:'',
    email:'',
    password:'',
    department:''

  })
  const handleChange=(e)=>{
    const {name,value}=e.target;
     setForm((prev)=>({
      ...prev,
      [name]:value
     }))
   
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(form)
  }
  return (  
    <div class="form">
       <h1>Form</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange}></input><br></br>
        <label htmlFor="">Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}></input><br></br>
        <label htmlFor="">Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange}></input><br></br>
        <label htmlFor="">Department:</label>
        <input type="text" name="department" value={form.department} onChange={handleChange}></input><br></br>
        <label htmlFor="">Gender:</label><br></br>
        <input type="radio" name="gender"></input>
        <label htmlFor=''>Male</label><br></br>
        <input type="radio" name="gender"></input>
        <label htmlFor=''>Female</label><br></br>
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default Contact