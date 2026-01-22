import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <div>
    <ul>
      <li>
        <Link to='/State'>useState</Link><br></br>
        </li>
        <li>
        <Link to='/Effects'>useEffect</Link><br></br>
      </li>
      <Link to='/Contact'>Contact</Link><br></br>
    </ul>
    </div>
    </>
     
  )
}

export default Home