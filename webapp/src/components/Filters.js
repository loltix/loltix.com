import React from "react";
import "./Filters.scss";

export default function Filters() {
  return (
    <div className="filters">
      <div>Featured / Show All</div>
      <div>Filter</div>
      <div>Dates</div>
      <div>
        <label htmlFor="">Sort By</label>
        <select style={{ marginLeft: "5px", padding: "15px" }}>
          <option>Date</option>
          <option>Distance</option>
          <option>Price</option>
          <option>Popularity</option>
        </select>
      </div>
    </div>
  );
}
