import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {

    const clickToCopy = () => {
        const el = document.createElement('textarea');
        el.value = "jackielong336699@gmail.com";
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("Contact Email Copied to ClipBoard");
      }


    return (
        <div className = 'foot-container'>
            <div className = 'footer-links'>
                <div className = 'footer-link-wrapper'>
                    <div className = 'footer-link-items'>
                        <h2>Social Media</h2>
                        <a href="https://www.linkedin.com/in/jikai-long/">LinkedIn</a>
                        <a href="https://www.facebook.com/long.jikai/">Facebook</a>
                        <a href="https://www.instagram.com/jacklong36/">Instagram</a>
                    </div>
                    <div className = 'footer-link-items'>
                        <h2>Code Repo</h2>
                        <a href="https://github.com/JikaiLong">Github</a>
                    </div>
                    <div className = 'footer-link-items'>
                        <h2>Contact</h2>
                        <a className = "contact-email" onClick = {clickToCopy}>Contact Email</a>
                    </div>
                </div>
            </div>
            <section className = "social-media">
                <div className = "social-media-wrap">
                    <div className = "footer-logo">
                        <Link to = "/" className = "social-logo">
                            JIKAI <i className="fas fa-umbrella-beach"></i>
                        </Link>
                    </div>
                    <small className = 'website-rights'>JIKAI © 2021</small>
                </div>
            </section>
        </div>
    )
}

export default Footer
