import React from "react";
import "./UpcomingShowRow.scss";

export default function UpcomingShowRow({ show }) {
  return (
    <div className="upcomingShowRow">
      <div className="dates">
        <div className="days">{show.days}</div>
        <div className="monthDay">{show.monthDay}</div>
      </div>
      <div className="rightSide">
        <div className="mainDetails">
          <div className="venueName">
            {show.venue} <span className="cityState"> - {show.cityState}</span>
          </div>
          <div className="showNameLine">{show.showNameLine1}</div>
          <div className="showNameLine">{show.showNameLine2}</div>
        </div>
        <div className="tickets">
          <div className="pickAShow">Pick A Show:</div>
          <select>
            <option>Saturday August 17th, 9:30 PM</option>
          </select>
          <button className="ctaButton">GET TICKETS</button>
        </div>
      </div>
    </div>
  );
}
