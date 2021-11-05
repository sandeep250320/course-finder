import React from "react";
import "./Card.css";

function CardOne({courseId, courseName, provider, university, parentSub, childSub, url, nextSess}) {
  
  return (
    <div className="Card">
      <a href={url} target="_blank" rel="noreferrer" className="link">
        <div className="id">
          <div className="Id">{courseId} </div>
          <div className="date">{nextSess}</div>
        </div>
        <div className="provider">
        <span >provider</span>
        <h6 >{provider}</h6>
        </div>
        <div className="courseName">
        <span>Course name</span>
        <code>  <h6 >{courseName}</h6> </code>
          </div>
          <div className="university">
          <span>Universities/Institutions</span>
          <h6 >{university}</h6>
        </div>
        <div className="childParentTitle">
          <span>Parent Subject</span>
          <span>Child Subject</span>
        </div>
        <div className="childParent">
          <h6>{parentSub}</h6>
          <h6>{childSub}</h6>
        </div>
      </a>
    </div>
  );
}

export default CardOne;
