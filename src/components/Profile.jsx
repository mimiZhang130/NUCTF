import React from 'react'
import TeamSocials from "./TeamSocials"
const Profile = () => {
  return (
        <div className="profile-container">
            <div className="profile-image">
                <img src="/assets/test-cat-profile.jpeg"/>
            </div>
            <div className="profile-text">
                <div className="profile-name">
                    <b><h1>Mimi :D</h1></b>
                    <p>Co-president</p>
                </div>
                <br></br>
                <div className="profile-socials">
                    <TeamSocials icon="/assets/socials/email.svg" link="mailto:MimiZhang2027@u.northwestern.edu"/>
                    <TeamSocials icon="/assets/socials/github.svg" link="https://github.com/mimiZhang130"/>
                </div>
            </div>
        </div>
  )
}

export default Profile
