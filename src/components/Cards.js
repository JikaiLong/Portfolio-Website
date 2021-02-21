import React from 'react'
import SkillCard from './SkillCard';
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className = "cards-overall-container">
            <h1>My Skills</h1>
                <SkillCard/>
            <div className = "cards"> 
                <h1>
                    My Projects
                </h1>
                <div className = "cards__container">
                    <div className = "cards__wrapper">
                        <ul className = "cards__items">
                            <CardItem/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
