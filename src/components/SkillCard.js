import React from 'react'
import C from './icon/C.png';
import CPLUS from './icon/c++.png';
import css from './icon/css.png';
import git from './icon/git.png';
import html from './icon/html.png';
import java from './icon/java.png';
import js from './icon/js.png';
import mysql from './icon/mysql.png';
import nodejs from './icon/nodejs.png';
import ps from './icon/ps.png';
import react from './icon/react.png';
import shell from './icon/shell.png';
import sql from './icon/sql.png';
import swift from './icon/swift.png';
import python from './icon/python.png';
import angular from './icon/angular.png';
import mongo from './icon/mongodb.png';
import vb from './icon/vb.jpg';
import D3 from './icon/D3.png';
import firebase from './icon/firebase.png'
import excel from './icon/excel.png';
import "./SkillCard.css"

function SkillCard() {
    return (
        <div>
            <div className = "skill-section">
                <span className="l_icon">Programming Language: 
                    <img className = "l_icon_pic" src={C} alt = ""/>
                    <img className = "l_icon_pic" src={CPLUS} alt = ""/>
                    <img className = "l_icon_pic" src={java} alt = ""/>
                    <img className = "l_icon_pic" src={python} alt = ""/>
                    <img className = "l_icon_pic" src={js} alt = ""/>
                    <img className = "l_icon_pic" src={html} alt = ""/>
                    <img className = "l_icon_pic" src={css} alt = ""/>
                    <img className = "l_icon_pic" src={swift} alt = ""/>
                    <img className = "l_icon_pic" src = {vb} alt = ""/>

                </span>
                <br/>
                <span className = "l_icon">
                Web Development Framwork: 
                    <img className = "l_icon_pic" src={nodejs} alt = ""/>
                    <img className = "l_icon_pic" src={react} alt = ""/>
                    <img className = "l_icon_pic" src={angular} alt = ""/>
                    <img className = "l_icon_pic" src={D3} alt = ""/>

                </span>
                <br/>
                <span className = "l_icon">
                Data Management: 
                    <img className = "l_icon_pic" src={sql} alt = ""/>
                    <img className = "l_icon_pic" src={mongo} alt = ""/>
                    <img className = "l_icon_pic" src={firebase} alt = ""/>
                    <img className = "l_icon_pic" src={excel} alt = ""/>

                </span>
                <br/>
                <span className = "l_icon">
                System and File Management: 
                    <img className = "l_icon_pic" src={git} alt = ""/>
                    <img className = "l_icon_pic" src={shell} alt = ""/>
                    <img className = "l_icon_pic" src={ps} alt = ""/>
                </span>

                </div>
        </div>
    )
}

export default SkillCard
