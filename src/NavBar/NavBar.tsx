import React from "react"
import './NavBar.css';

type NavBarProps = {
  distanceScrolled?: number
}

const navBarHeight = 56

const NavBar = ({ distanceScrolled = 0 } : NavBarProps) => {

  return (
    <div className="NavBar-container">
       <a className="NavBar-name"  href='https://www.victorchirino.com'>
          Victor Chirino
       </a>
       {distanceScrolled > 0 &&
        <div className="NavBar-title" style={{ marginTop:`${navBarHeight-distanceScrolled}px` }}>
          Countries
        </div>
       }
       <div className="NavBar-social">
        <a className="NavBar-icon-container" href="mailto: vicchirino@gmail.com">
          <img className="NavBar-icon" src="/gmail.svg" alt="Gmail" />
        </a>
        <a className="NavBar-icon-container" href="https://github.com/vicchirino">
          <img className="NavBar-icon" src="/github.svg" alt="Github" />
        </a>
        <a className="NavBar-icon-container" href="https://twitter.com/VicChirino">
          <img className="NavBar-icon" src="/twitter.svg" alt="Twitter" />
        </a>
        <a className="NavBar-icon-container" href="https://ar.linkedin.com/in/victor-chirino">
          <img className="NavBar-icon" src="/linkedin.svg" alt="Linkedin" />
        </a>
        <a className="NavBar-icon-container" href="https://www.toptal.com/resume/victor-gabriel-chirino">
          <img className="NavBar-icon" src="/toptal.svg" alt="Toptal" />
        </a>
        <a className="NavBar-icon-container" href="https://www.instagram.com/vicchirino/">
          <img className="NavBar-icon" src="/instagram.svg" alt="Instagram" />
        </a>
       </div>
    </div>
  )
}

export default NavBar