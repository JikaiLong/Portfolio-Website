import React from 'react';
import './EducationSection.css';
import Stare from '../images/Staring_contest.jpg';
import Hangout from '../images/Hanging_out.jpg';
import Present from '../images/Present.jpg'
import UofT from '../images/UofTlogo.png'

function EducationSection() {
    return (
        <div>
            <div className = 'education-container'>
                <h1> <img className = "UofTlogo" src = {UofT}/> <br/>2015 - 2020</h1>
                    <p>I obtained a Bachelor of Computer Science - Software Engineering Stream at the University of Toronto. <br/>
                    During my academic years, I learnt and mastered lots of Software Engineering skills.<br/>
                    I was a memeber of CMS research group where I developed research tools and conducted multiple experiments. <br/> 
                    I published one <a href = "https://www.researchgate.net/profile/Brian_Harrington3/publication/333136356_A_Statistical_Analysis_of_Drop_Rates_in_Introductory_Computer_Science_by_Gender_and_Partial_Grade/links/5ed5274e92851c9c5e720c8d/A-Statistical-Analysis-of-Drop-Rates-in-Introductory-Computer-Science-by-Gender-and-Partial-Grade.pdf">Paper </a> and presented my findings on <a href = "https://www.cs.ubc.ca/wccce/">WCCCE</a>.
                    <br/> I also worked as a Teaching Assistant (2019 - 2020) at the University of Toronto.
                    </p> 
                    <div className = "image-section">
                        <figure>
                            <img className = "Life" src = {Present}/>
                            <figcaption className = "Life_Note">Presenting at Conference</figcaption>
                        </figure>
                        <figure>
                            <img className = "Life" src = {Hangout}/>
                            <figcaption className = "Life_Note">Hanging out with Friends</figcaption>
                        </figure>
                        <figure>
                            <img className = "Life" src = {Stare}/>
                            <figcaption className = "Life_Note">Staring contest with a Statue</figcaption>
                        </figure>
                    </div>
                   

                   
            </div>
        </div>
    )
}

export default EducationSection
