import React from 'react';
import './Timeline.css'

const TimelineItem = ({data}) =>{
    console.log(data.category.tag)
    return (
        <div className = "timeline-item">
            <div className = "timeline-item-content">
                <img className = "tag" src = {data.category.tag} />
                <time>{data.time}</time>
                <p>{data.text}</p>
                {data.link && <a href = {data.link.url} target = "blank" rel = "non-opener">
                    {data.link.text}
                </a>}
                <span className = "circle"></span>
            </div>
        </div>
    )
}

export default TimelineItem;