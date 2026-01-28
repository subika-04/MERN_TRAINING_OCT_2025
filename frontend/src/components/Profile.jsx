import React from 'react'
import { userContext } from '../App'
import { useContext } from 'react'

const Profile = ({ age, skills }) => {
  const name=useContext(userContext)
  return (
    <div>
      <h1>I am {name} and {age} years old</h1>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Profile
