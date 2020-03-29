import React from "react";
import "./UpcomingShowList.scss";
import UpcomingShowRow from "./UpcomingShowRow";

export default function UpcomingShowList({ shows }) {
  return (
    <div className="upcomingShowList">
      <h3>UPCOMING SHOWS</h3>
      {shows.map(show => {
        return <UpcomingShowRow show={show} key={show.id} />;
      })}
    </div>
  );
}
