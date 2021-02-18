import React from 'react'
import './HeroSection.css'
import '../App.css'
import P from '../images/p.jpg';


function HeroSection() {
    return (
        <div className = 'hero-container'>
        <img className = "profile" src = {P}/>
        <h1>Hello, I am Jikai</h1>
        <p>A New Grad Software Engineer Seeking Software Development Opportunities</p>
        
        </div>
    )
}

export default HeroSection
