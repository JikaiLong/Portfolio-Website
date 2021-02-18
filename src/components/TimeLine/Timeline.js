import React from 'react';
import timelineData from './Data'
import TimelineItem from './TimelineItem'
import './Timeline.css'

const Timeline = () => timelineData.length > 0 && (
    <div className = "experience-container">
        <h1>My Experiences</h1>
        <div className = "timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data = {data} key = {idx} />
            ))}
        </div>
    </div>
);

export default Timeline;