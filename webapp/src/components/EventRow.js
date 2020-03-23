import React from "react";
import "./EventRow.scss";
import { withRouter } from "react-router-dom";

export default withRouter(function EventRow({ history, event }) {
  return (
    <div className="eventRow">
      <div className="dateAndImage">
        <div className="date">
          <div className="weekdays">WED-THU</div>
          <div className="month">Aug</div>
          <div className="days">17-18</div>
        </div>
        <div className="resultImage">
          <img src={event.avatarUrl} alt="item" />
        </div>
      </div>
      <div
        className="headlineAndDescription"
        onClick={() => {
          history.push(`/event/${event.id}`);
        }}
      >
        <div className="headline">{event.name}</div>
        <div className="description">{event.description}</div>
        <div className="moreInfoLink">
          <a href="/">More info...</a>
        </div>
      </div>
      <div className="locationAndTimes">
        <div>
          <strong>Laffs Comedy Cafe</strong>
        </div>
        <div className="location">
          <strong>Tuscon</strong>
        </div>
        {event.showDates.map((showDate, i) => {
          return (
            <div className="eventTime" key={i}>
              <div>{showDate.day}</div>
              <div>{showDate.times}</div>
            </div>
          );
        })}
        <button className="ctaButton">TICKETS $12.50+</button>
      </div>
    </div>
  );
});
