import React from 'react'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import people from './assets/Team.json'
const Team = () => {
  return (
    <div>
        <NavBar page="Team"/>

        <h1 className="header">Meet the Team</h1>

        <div className="all-profiles-container">
          {people.map((person, index) => (
            <Profile name={person.name} role={person.role} email={person.email} github={person.github}></Profile>
          ))}
        </div>
    </div>
  )
}

export default Team