import React, { useEffect, useState } from "react";
import "./UpcomingShows.scss";
import EventRow from "../components/EventRow";
import Filters from "../components/Filters";
import fakeEventData from "../mockdata/fakeEventData";

export default function UpcomingShows() {
  const [eventData, setEventData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setEventData(fakeEventData);
    }, 1000);
  });

  return (
    <section>
      <div className="container upcomingShows">
        <div className="upcomingShowsHeader">
          <h2>Upcoming Shows</h2>
          <Filters />
        </div>
        <div className="searchResultsContainer">
          <div className="count">
            1-5 of over 35 events within 50 miles of{" "}
            <span className="orangeText">Tuscon, AZ 85719</span>
          </div>
          {!eventData && (
            <div className="results">
              <EventRow key={1} loading />
              <EventRow key={2} loading />
              <EventRow key={3} loading />
            </div>
          )}
          {eventData && (
            <div className="results">
              {eventData.map(event => {
                return <EventRow key={event.id} event={event} />;
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
