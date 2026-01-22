import React, { useState, useEffect } from 'react'

const Effects = () => {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUsers(data) 
      })
  }, [count]) 

  return (
    <div className='effect'>
      <h1>useEffect Example</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>

      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Effects
