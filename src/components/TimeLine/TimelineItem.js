import React from 'react';
import './Timeline.css'

const TimelineItem = ({data}) =>{
    return (
        <div className = "timeline-item">
            <div className = "timeline-item-content">
                <span className = "tag" style = {{background: data.category.color}}>
                    <div className = "tag-text"> {data.category.tag} </div>
                </span>
                <div className = "job-title">
                    <div className = "tag-text">{data.title}</div>
                </div>
                <time> <div className = "tag-text">{data.date} </div></time>
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