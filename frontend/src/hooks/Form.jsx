import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [form,setForm]=useState({
        name:"",
        email:"",
        age:"",
        department:""
    })
    const handleChange=(e)=>
    {
     const {name,value}=e.target;
     setForm((prev)=>
        ({
        // If we don't use spread operator,then if name is modified,only name will be present
        ...prev,
        [name]:value
     }))
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(form)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type="text" name="name" value={form.name} onChange={handleChange}></input><br></br>
          <label htmlFor='email'>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange}></input><br></br>
          <label htmlFor='age'>Age:</label>
          <input type="text" name="age" value={form.age} onChange={handleChange}></input><br></br>
          <label htmlFor='department'>Department:</label>
          <input type="text" name="department" value={form.department} onChange={handleChange}></input><br></br>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form