import React from 'react';
import Lift from '../images/Lift-log.jpg';
import {Link} from 'react-router-dom';
import Treat from '../images/Treat.jpeg';
import Youtube from '../images/Youtube_trend.png';



function CardItem() {
    return (
        <>
          <li className = "cards__item">
              <a href='https://github.com/R4HMATT/LiftLogs' className = "cards__item__link">
                <figure className = "cards__item__pic-wrap">
                    <img src = {Lift} alt = "" className = "cards__item__img"/>
                </figure>
                <div className = "cards__item__info">
                    <h5 className = "cards__item__text">
                        <div className = "project-title">Lift Logs </div> 
                        <br/>
                        Lift Logs is a mobile application that makes users gym life more organized and manageable. It provides services such as a workout tracker, workout management chart, AR visual guidlines and Machine Learning recommendation system.
                        <br/><br/>
                        <div className = "link-description">  check out Lift Logs open-sourced code</div>
                    </h5>
                </div>
              </a>
          </li>
          <li className = "cards__item">
              <a href='https://docs.google.com/document/d/1zasQGKr90jBvq0aas-EE0ZRJDGWXYA292maI8A74KbI/edit?usp=sharing' className = "cards__item__link">
                <figure className = "cards__item__pic-wrap">
                    <img src = {Youtube} alt = "" className = "cards__item__img"/>
                </figure>
                <div className = "cards__item__info">
                    <h5 className = "cards__item__text">
                    <div className = "project-title">Youtube Video Trending Predictions Model</div> <br/>
                    A deep learning model using TensorFlow framework to predict YouTube video popularity. The model achieved 91% accuracy. If you would like to check out the source code, please contact via email.
                        <br/><br/>
                    <div className = "link-description">Feel free to read the full Model Training Report</div>
                    </h5>
                </div>
              </a>
          </li>
          <li className = "cards__item">
              <a href = "https://github.com/uoft-treat" className = "cards__item__link">
                <figure className = "cards__item__pic-wrap">
                    <img src = {Treat} alt = "" className = "cards__item__img"/>
                </figure>
                <div className = "cards__item__info">
                    <h5 className = "cards__item__text">
                    <div className = "project-title">UofT TREAT </div><br/> 
                        TREAT is a web-based software for students and professors at the University of Toronto to dynamicly create and conduct psychological experiments. We used React.js as front-end framework with parallel node servers as back-end and MongoDB to store student data.
                        <br/><br/>
                    <div className = "link-description">check out UofT TREAT open-sourced code</div>
                    </h5>
                </div>
              </a>
          </li>
        </>
    )
}

export default CardItem
