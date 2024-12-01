import React from 'react'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
const Team = () => {
  return (
    <div>
        <NavBar page="Team"/>

        <h1 className="header">Meet the Team</h1>

        <div className="all-profiles-container">
          <Profile/>
          <Profile/>
        </div>
    </div>
  )
}

export default Team