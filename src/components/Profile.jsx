import React from 'react'
import TeamSocials from "./TeamSocials"
const Profile = ({name, role, email, github}) => {
  return (
        <div className="profile-container">
            <div className="profile-image">
                <img src="/assets/test-cat-profile.jpeg"/>
            </div>
            <div className="profile-text">
                <div className="profile-name">
                    <b><h1>{name}</h1></b>
                    <p>{role}</p>
                </div>
                <br></br>
                <div className="profile-socials">
                    <TeamSocials icon="/assets/socials/email.svg" link={email}/>
                    <TeamSocials icon="/assets/socials/github.svg" link={github}/>
                </div>
            </div>
        </div>
  )
}

export default Profile
