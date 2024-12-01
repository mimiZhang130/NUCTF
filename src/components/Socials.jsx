import React from 'react'

const Socials = ({ icon, text, link }) => {
  return (
    <a className="invisible-link" href={link}>
        <div className="inline-flex">
            <img src={icon}></img>
            <p style={{margin: "1rem"}}>{text}</p>
        </div>
    </a>
  )
}

export default Socials