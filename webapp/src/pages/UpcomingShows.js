import React from "react";
import "./UpcomingShows.scss";
import EventRow from "../components/EventRow";
import Filters from "../components/Filters";

const fakeEventData = [
  {
    id: "11111",
    name: "Trenton Davis",
    avatarUrl: "https://www.fillmurray.com/173/151",
    description:
      "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",

    venueName: "Laffs Comedy Cafe",
    venueLocation: "Tuscon",
    showDates: [
      {
        day: "Wednesday, August 17th",
        times: "8:00 PM, 9:30 PM"
      },
      {
        day: "Thursday, August 18th",
        times: "8:00 PM, 9:30 PM"
      }
    ],
    ticketPrice: "12.50"
  },
  {
    id: "2222",
    name: "Peter Andrews",
    avatarUrl: "https://www.fillmurray.com/173/154",
    description:
      "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",

    venueName: "Laffs Comedy Cafe",
    venueLocation: "Tuscon",
    showDates: [
      {
        day: "Wednesday, August 17th",
        times: "8:00 PM, 9:30 PM"
      },
      {
        day: "Thursday, August 18th",
        times: "8:00 PM, 9:30 PM"
      }
    ],
    ticketPrice: "12.50"
  },
  {
    id: "213213",
    name: "Jim Davis",
    avatarUrl: "https://www.fillmurray.com/173/152",
    description:
      "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",
    venueName: "Club Congress",
    venueLocation: "Tuscon",
    showDates: [
      {
        day: "Wednesday, August 17th",
        times: "8:00 PM, 9:30 PM"
      },
      {
        day: "Thursday, August 18th",
        times: "8:00 PM, 9:30 PM"
      }
    ],
    ticketPrice: "12.50"
  },
  {
    id: "4444",
    name: "jerry Davis",
    avatarUrl: "https://www.fillmurray.com/173/153",
    description:
      "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",
    venueName: "Fox Theatre",
    venueLocation: "Tuscon",
    showDates: [
      {
        day: "Wednesday, August 17th",
        times: "8:00 PM, 9:30 PM"
      }
    ],
    ticketPrice: "12.50"
  }
];

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
