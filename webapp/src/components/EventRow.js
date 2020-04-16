import React from "react";
import "./EventRow.scss";
import { withRouter } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default withRouter(function EventRow({
  history,
  event = {},
  loading = false
}) {
  if (loading) {
    return (
      <div className="eventRow">
        <div style={{ width: "100%" }}>
          <Skeleton height={150} />
        </div>
      </div>
    );
  }
  const showDates = event.showDates || [];
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
          history.push(`${process.env.PUBLIC_URL}/event/${event.id}`);
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
          <strong>{event.venueName}</strong>
        </div>
        <div className="location">
          <strong>{event.venueLocation}</strong>
        </div>
        {showDates.map((showDate, i) => {
          return (
            <div className="eventTime" key={i}>
              <div>{loading ? <Skeleton /> : showDate.day}</div>
              <div>{loading ? <Skeleton /> : showDate.times}</div>
            </div>
          );
        })}
        {loading ? (
          <Skeleton />
        ) : (
          <button className="ctaButton">{event.ctaText}</button>
        )}
      </div>
    </div>
  );
});
