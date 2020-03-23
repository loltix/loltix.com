import React from "react";
import "./TopHeader.scss";
import { FaSearch, FaMapMarkerAlt, FaBars } from "react-icons/fa";
// import { usePosition } from "../util/usePosition";

export default function TopHeader({ onMenuButtonClick }) {
  // const { latitude, longitude, error } = usePosition();
  // console.log(`lat= ${latitude}, lon=${longitude}`);
  // console.log(error);
  return (
    <div className="container topHeader">
      <div className="topHeaderContent">
        <div className="logoArea">
          <img src="/logo-long-cord.png" className="logo" alt="logo" />
          <div className="discoverText">Discover the best comedy near you.</div>
        </div>
        <div className="searchFields">
          <div>
            <FaSearch className="searchInputIcon" />
            <input
              placeholder="Find a comedian, venue or show"
              className="searchInput"
            />
          </div>
          <div className="locationFieldAndSearchButton">
            <FaMapMarkerAlt className="searchInputIcon" />
            <input placeholder="Location" />
            <button className="searchButton">
              <FaSearch style={{ margin: "3px auto", display: "block" }} />
            </button>
          </div>
        </div>
        <FaBars className="menuBarsIcon" onClick={onMenuButtonClick} />
      </div>
    </div>
  );
}
