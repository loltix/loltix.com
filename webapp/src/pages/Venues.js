import React from "react";
import "./Venues.scss";
import Map from "../components/VenueMap";

const fakeData = [
  {
    name: "The 0",
    position: [32.1, -110.8],
    location: "Tucson, AZ",
    address: "2900 E Broadway Blvd, Tucson, AZ 85716",
    distance: "2.1mi",
    description:
      "Established in 1988, Laffs is the oldest comedy club in Arizona.  The club currently hosts open mike night every Thursday and features nationally touring headliners... Friday and Saturday.",
    logoUrl: "https://i.picsum.photos/id/513/120/120.jpg"
  },
  {
    name: "Laffs Comedy Caffé",
    position: [32.2, -110.6],
    location: "Tucson, AZ",
    address: "2900 E Broadway Blvd, Tucson, AZ 85716",
    distance: "3.3mi",
    description:
      "Established in 1988, Laffs is the oldest comedy club in Arizona.  The club currently hosts open mike night every Thursday and features nationally touring headliners... Friday and Saturday.",
    logoUrl: "https://i.picsum.photos/id/512/120/120.jpg"
  },
  {
    name: "Fox Theatre",
    position: [32.0001, -110.9],
    location: "Tucson, AZ",
    address: "2900 E Broadway Blvd, Tucson, AZ 85716",
    distance: "2.1mi",
    description:
      "Established in 1988, Laffs is the oldest comedy club in Arizona.  The club currently hosts open mike night every Thursday and features nationally touring headliners... Friday and Saturday.",
    logoUrl: "https://i.picsum.photos/id/511/120/120.jpg"
  },
  {
    name: "Club Congress",
    position: [32.3, -111],
    location: "Tucson, AZ",
    address: "2900 E Broadway Blvd, Tucson, AZ 85716",
    distance: "1.5mi",
    description:
      "Established in 1988, Laffs is the oldest comedy club in Arizona.  The club currently hosts open mike night every Thursday and features nationally touring headliners... Friday and Saturday.",
    logoUrl: "https://i.picsum.photos/id/519/120/120.jpg"
  },
  {
    name: "Rialto Theatre",
    position: [32.0, -111.001],
    location: "Tucson, AZ",
    address: "2900 E Broadway Blvd, Tucson, AZ 85716",
    distance: "3.0mi",
    description:
      "Established in 1988, Laffs is the oldest comedy club in Arizona.  The club currently hosts open mike night every Thursday and features nationally touring headliners... Friday and Saturday.",
    logoUrl: "https://i.picsum.photos/id/514/120/120.jpg"
  }
];

export default function Venues() {
  return (
    <section>
      <div className="container venues">
        <div className="venueHeader">
          <h2>Venues</h2>
        </div>
        <div>
        {/*<div style={{ display: "flex", "flex-direction": "row" }}>*/}
          <Map markers={fakeData} />
          <div className="venueList">
            {fakeData.map(venue => {
              return (
                <div key={venue.name} className="venueRow">
                  <div className="firstRow">
                    <span className="name">{venue.name}</span>
                    <span className="location"> - {venue.location}</span>
                  </div>
                  <div className="secondRow">
                    <div>
                      <img src={venue.logoUrl} alt="venue logo" />
                    </div>
                    <div className="middle">
                      <div className="address">{venue.address}</div>
                      <div className="description">{venue.description}</div>
                      <div className="moreInfoLink">
                        <a href="/">More info...</a>
                      </div>
                    </div>
                    <div className="distance">{venue.distance}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
