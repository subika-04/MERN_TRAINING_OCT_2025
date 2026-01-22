import React from 'react'
import State from './hooks/State'
import Effects from './hooks/Effects'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/State" element={<State/>}/>
         <Route path="/Effects" element={<Effects/>}/>
         <Route path="/Contact" element={<Contact/>}/>

      </Routes>
  )
}

export default App
