import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true) 

    const handleClick = () => setClick(!click) 
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <>
          <nav className = "navbar">
            <div className = "navbar-container">
              <Link to = '/' className = "navbar-logo">
                Jikai Long &nbsp; <i className="fas fa-id-badge"></i>
              </Link>
              <div className = "menu-icon" onClick = {handleClick}>
                  <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className = {click ? 'nav-menu active' : 'nav-menu'} >
                  <li className = 'nav-item'>
                      <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                          Home
                      </Link>
                  </li>
                  <li className = 'nav-item'>
                      <Link to = '/education' className = 'nav-links' onClick = {closeMobileMenu}>
                          Education
                      </Link>
                  </li>
                  <li className = 'nav-item'>
                      <Link to = '/experiences' className = 'nav-links' onClick = {closeMobileMenu}>
                          Experiences
                      </Link>
                  </li>
                  <li className = 'nav-item'>
                      <Link to = '/projects' className = 'nav-links' onClick = {closeMobileMenu}>
                          Skills and Projects
                      </Link>
                  </li>
              </ul>
     
            </div>
          </nav>
        </>
    )
}

export default Navbar
