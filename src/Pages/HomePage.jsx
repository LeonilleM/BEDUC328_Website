import React from 'react'
import Navbar from '../components/Sidenavbar'

// Content broken up into componenets
import Home from '../components/Home'
import Cause from '../components/Cause'
import Action from '../components/Action'


function HomePage() {
  return (
    <div>
      <Home />
      <Cause />
      <Action/>
    </div>
  )
}

export default HomePage