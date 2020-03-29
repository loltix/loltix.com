import React, { useEffect } from "react";
import "./VenueDetails.scss";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import VenueMap from "../components/VenueMap";
import UpcomingShows from "./UpcomingShows";

const venue = {
  name: "Laffs Comedy Caffé",
  address: "Tucson, AZ",
  addressLine1: "1234 E Broadway",
  cityStateZip: "Tucson, AZ 77777",
  phone: "(555) 555-5555",
  domain: "http://www.some-long-domain.com",
  descriptiveText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const otherVenuesNearby = [
  {
    image: "https://via.placeholder.com/200x200.png?text=Fake+Venue",
    name: "Fake Venue",
    link: "#"
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Fake+Venue",
    name: "Fake Venue",
    link: "#"
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Fake+Venue",
    name: "Fake Venue",
    link: "#"
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Fake+Venue",
    name: "Fake Venue",
    link: "#"
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Fake+Venue",
    name: "Fake Venue",
    link: "#"
  }
];

export default function EventDetails() {
  const { venueId } = useParams();
  useEffect(() => {
    console.log("venue id = ", venueId);
    window.scrollTo(0, 0);
  }, [venueId]);

  return (
    <section>
      <div className="container venueDetails">
        <div className="venueCoreDetails">
          <div className="nameRow">
            {venue.name} <span className="address">- {venue.address}</span>
          </div>
          <div className="detailsContainer">
            <div className="leftSide">
              <div className="logoAndAddress">
                <div className="logoHolder">
                  <img
                    alt="venue logo"
                    src="http://placekitten.com/g/140/140"
                  />
                </div>
                <div className="addressHolder">
                  <div>{venue.addressLine1}</div>
                  <div>{venue.cityStateZip}</div>
                  <div className="orangeText">{venue.phone}</div>
                  <div className="orangeText">{venue.domain}</div>
                </div>
              </div>
              <div className="mapHolder">
                <VenueMap
                  centerLat={32.1}
                  centerLong={-110.8}
                  height="200px"
                  zoom={9}
                  markers={[
                    {
                      id: "the-0",
                      name: "The 0",
                      position: [32.1, -110.8],
                      location: "Tucson, AZ",
                      address: "2900 E Broadway Blvd, Tucson, AZ 85716",
                      distance: "2.1mi",
                      description:
                        "Established in 1988, Laffs is the oldest comedy club in Arizona.  The club currently hosts open mike night every Thursday and features nationally touring headliners... Friday and Saturday.",
                      logoUrl: "https://i.picsum.photos/id/513/120/120.jpg"
                    }
                  ]}
                />
              </div>
            </div>
            <div className="rightSide">
              <div>{venue.descriptiveText}</div>
              <div>
                <img
                  style={{ margin: "20px auto", display: "block" }}
                  src={"http://placekitten.com/g/300/200"}
                  alt="big venue"
                />
              </div>
            </div>
          </div>
        </div>
        <UpcomingShows />
        <div className="venueCarouselHolder">
          <Carousel items={otherVenuesNearby} title="OTHER VENUES NEARBY" />
        </div>
      </div>
    </section>
  );
}
