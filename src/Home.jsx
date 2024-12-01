import React from 'react'

import NavBar from './components/NavBar'
import Socials from './components/Socials'

const Home = () => {
  return (
    <div>
        <NavBar page="Home"/>

        <div className="container">
            <h1>Mission Statement</h1>
            <div className="bodyText">
                <p>NUCTF aims to foster a healthy and active ecosystem in Northwestern and Chicago, and solidify our community on the map as a competitive organization for CTF challenges. 
                    We hope to achieve our purpose as an organization through four main objectives: 
                </p>
                <ul>
                    <li>Provide a gateway for interested students to learn about different cybersecurity skills related to CTF challenges</li>
                    <li>Connect students with professors to engage students in cybersecurity related research</li>
                    <li>Help our students with networking and career opportunities in the cybersecurity industry</li>
                    <li>Collaborate with enterprises to empower our ecosystem</li>
                </ul>
            </div>

            <h1>Club Activities</h1>
            <div className="bodyText">
                <iframe src="https://calendar.google.com/calendar/embed?src=c_20cd39bcb23a160503db860faf0b0f7f28a23a0bcbe4c2b08e6076512f3993d0%40group.calendar.google.com&ctz=America%2FChicago" style={{border: "0"}} width="800" height="600"></iframe>
            </div>

            <h1>Find Us</h1>
            <div className="bodyText">
                <Socials icon="../src/assets/socials/email.svg" text="Email Us: ctfteam@u.northwestern.edu" link="mailto:ctfteam@u.northwestern.edu"/>
                <Socials icon="../src/assets/socials/instagram.svg" text="Instagram: nu_ctf" link="https://www.instagram.com/nu_ctf/"/>
                <Socials icon="../src/assets/socials/github.svg" text="Github:" link="/"/>
                <Socials icon="../src/assets/socials/ctf.svg" text="CTFTime:" link="/"/>
                <Socials icon="../src/assets/socials/wildcat.svg" text="Wildcat Connection: CTF Team" link="https://northwestern.campuslabs.com/engage/organization/ctfteam"/>
            </div>
        </div>
        
    </div>
  )
}

export default Home