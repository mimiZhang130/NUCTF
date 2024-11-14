import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar'
import Writeup from './components/Writeup'

const Writeups = () => {
  const navigate = useNavigate();

  return (
    <div>
        <NavBar page="Writeups"/>
        <div>
          
        </div>
        <div className="writeup-buttons">
          <button className="writeup-button" onClick={() => {navigate('/writeups/FunnyLogin')}}>
              <h3>FunnyLogin Writeup</h3>
              <div className="writeup-tags">
              <span className="writeup-tag">Web Hacking</span>
              <span className="writeup-tag">SQLi</span>
              </div>
          </button>
          <button className="writeup-button">
            <h3>FunnyLogin Writeup</h3>
            <div className="writeup-tags">
            <span className="writeup-tag">Web Hacking</span>
            <span className="writeup-tag">SQLi</span>
            </div>
          </button>
        </div>
    </div>
  )
}

export default Writeups