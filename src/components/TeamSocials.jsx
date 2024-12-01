import React from 'react'

const TeamSocials = ({ icon, link }) => {
  return (
    <a className="invisible-link" href={link}>
        <div className="inline-flex">
            <img src={icon}></img>
        </div>
    </a>
  )
}

export default TeamSocials