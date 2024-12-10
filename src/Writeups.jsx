import React from 'react'
import NavBar from './components/NavBar'
import WriteupCover from './components/WriteupCover';
import writeups from './assets/Writeups.json';
const Writeups = () => {
  return (
    <div>
        <NavBar page="Writeups"/>
        <h1 className="header">Writeups</h1>
        <div style={{display:"flex"}}>
          <div className="writeup-buttons">
            {writeups.map((writeup, index) => (
              <WriteupCover title={writeup.title} tags={writeup.tags}></WriteupCover>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Writeups