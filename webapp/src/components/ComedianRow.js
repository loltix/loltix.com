import React from "react";
import "./ComedianRow.scss";
import { useHistory } from "react-router-dom";

export default function ComedianRow({
  id,
  imageUrl,
  name,
  yearsExperience,
  location,
  comedyStyles,
  bioAndCredits,
  videoImageUrl
}) {
  const history = useHistory();
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
        <button
          className="ctaButton"
          onClick={() => {
            history.push(`${process.env.PUBLIC_URL}/comedian/${id}`);
          }}
        >
          View Profile
        </button>
      </div>
      <div className="videoBox">
        <img src={videoImageUrl} alt="video profile" />
      </div>
    </div>
  );
}
