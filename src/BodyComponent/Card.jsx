import React from "react";
import "./Card.css";

function CardOne(props) {
  return (
    <div className="Card">
      <a href={props.link} target="_blank" rel="noreferrer" className="link">
        <div className="id">
          <h4 className="Id">{props.Id}</h4>
          <h4 className="date">{props.date}</h4>
        </div>
        <div className="provider">
        <span >provider</span>
        <h4 >{props.provider}</h4>
        </div>
        <div className="courseName">
        <span>Course name</span>
          <h2 >{props.courseName}</h2>
          </div>
          <div className="university">
          <span>Universities/Institutions</span>
          <h4 >{props.university}</h4>
        </div>
        <div className="childParentTitle">
          <h5>Parent Subject</h5>
          <h5>Child Subject</h5>
        </div>
        <div className="childParent">
          <h4>{props.parentSub}</h4>
          <h4>{props.childSub}</h4>
        </div>
      </a>
    </div>
  );
}

export default CardOne;
