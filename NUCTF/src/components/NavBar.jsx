import React from 'react'


const NavBar = ({page}) => {
    function isActive(pageName) {
        console.log(page)
        console.log(pageName)
        return page === pageName ? "nav-link active" : "nav-link"
    }
  return (
    <div>
        <nav className="navbar" style={{ backgroundColor: "white", borderBottom: "solid .25rem var(--secondary-color)" }}>
            <a className="navbar-brand" href="/">
                <img src="src/assets/NUCTF_Logo.png" alt="Bootstrap" width="350" height="100%"/>
            </a>
            <ul className="nav nav-underline justify-content-end" style={{marginRight: "7%"}}>
                <li className="nav-item">
                    <a className={isActive("Home")} href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className={isActive("Writeups")} href="/writeups">Writeups</a>
                </li>
                <li className="nav-item">
                    <a className={isActive("Team")} href="/team">Team</a>
                </li>
                <li className="nav-item">
                    <a className={isActive("Resources")} href="/resources">Resources</a>
                </li>
                <li className="nav-item">
                    <a className={isActive("Blog")} href="/blog">Blog</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar