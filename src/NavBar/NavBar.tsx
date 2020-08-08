import React, { useState } from "react"
import './NavBar.css';
import { useScrollPosition } from "../hooks/useScrollPosition";

type NavBarProps = {
  containerRef?: React.RefObject<HTMLDivElement>
}

const navBarHeight = 56

const NavBar = ({ containerRef } : NavBarProps) => {


  const [displayTitle, setDisplayTitle] = useState(false)
  const header = containerRef?.current?.firstChild
  // @ts-ignore
  const headerHeight = header?.offsetHeight

  useScrollPosition(({ prevPos, currPos }) => {
    if ( currPos.y < 0 ) {
      if (Math.abs(currPos.y) >= headerHeight + navBarHeight + 20) {
        setDisplayTitle(true)
      } else {
        setDisplayTitle(false)
      }
    }
  },
  [header, displayTitle])

  return (
    <div className="NavBar-container">
       <a className="NavBar-name"  href='https://www.victorchirino.com'>
          Victor Chirino
       </a>
       {displayTitle &&
        <div className="NavBar-title">
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