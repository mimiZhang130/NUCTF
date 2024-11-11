import React from 'react'

const Socials = ({ icon, text, link }) => {
  return (
    <a style={{color: "var(--primary-color)", textDecoration: "none"}} href={link}>
        <div className="inline-flex">
            <img src={icon}></img>
            <p style={{margin: "1rem"}}>{text}</p>
        </div>
    </a>
  )
}

export default Socials