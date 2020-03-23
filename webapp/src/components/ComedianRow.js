import React from "react";
import "./ComedianRow.scss";

export default function ComedianRow({
  imageUrl,
  name,
  yearsExperience,
  location,
  comedyStyles,
  bioAndCredits,
  videoImageUrl
}) {
  return (
    <div className="comedianRow">
      <div className="imageAndName">
        <div className="imageBox">
          <img src={imageUrl} alt="profile" />
        </div>
        <div className="nameAndLocation">
          <div className="name">{name}</div>
          <div className="yearsExperience">
            {yearsExperience} years Experience
          </div>
          <div className="locationText">
            Based out of <span className="location">{location}</span>
          </div>
        </div>
      </div>
      <div className="styleAndBio">
        <div className="comedyStyle">{comedyStyles}</div>
        <h5>BIO & CREDITS</h5>
        <div className="bioAndCredits">{bioAndCredits}</div>
        <button className="ctaButton">View Profile</button>
      </div>
      <div className="videoBox">
        <img src={videoImageUrl} alt="video profile" />
      </div>
    </div>
  );
}
