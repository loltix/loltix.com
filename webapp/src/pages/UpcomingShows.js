import React from "react";
import "./UpcomingShows.scss";
import EventRow from "../components/EventRow";
import Filters from "../components/Filters";
import fakeEventData from "../mockdata/fakeEventData";

export default function UpcomingShows() {
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
          <div className="results">
            {fakeEventData.map(event => {
              return <EventRow key={event.id} event={event} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
