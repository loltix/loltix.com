import React, { useEffect } from "react";
import "./EventDetails.scss";
import { useParams } from "react-router-dom";
import VenueMap from "../components/VenueMap";
import Carousel from "../components/Carousel";

const fakeEventData = {
  name: "Frankie Quinones",
  imageUrl: "https://www.fillmurray.com/250/200",
  dateStart: "Saturday, August 17",
  dateEnd: "Sunday August 18",
  venue: {
    name: "Laffs Comedy Caffé",
    position: [32.2, -110.6],
    location: "Tucson, AZ",
    address: "2900 E Broadway Blvd, Tucson, AZ 85716",
    distance: "3.3mi",
    description:
      "Established in 1988, Laffs is the oldest comedy club in Arizona.  The club currently hosts open mike night every Thursday and features nationally touring headliners... Friday and Saturday.",
    logoUrl: "https://i.picsum.photos/id/512/120/120.jpg"
  },
  showDates: ["Saturday, August 17 at 9:30 PM"]
};

const otherShows = [
  {
    image: "https://www.fillmurray.com/100/100",
    name: "James Brown",
    link: "#"
  },
  {
    image: "https://www.fillmurray.com/100/102",
    name: "Phil Murray",
    link: "#"
  },
  {
    image: "https://www.fillmurray.com/100/104",
    name: "Chris Brown",
    link: "#"
  },
  {
    image: "https://www.fillmurray.com/100/103",
    name: "Darius Rucker",
    link: "#"
  },
  {
    image: "https://www.fillmurray.com/100/101",
    name: "Gabriel Iglesias",
    link: "#"
  }
];

export default function EventDetails() {
  const { eventId } = useParams();
  useEffect(() => {
    console.log("event id = ", eventId);
    window.scrollTo(0, 0);
  }, [eventId]);

  return (
    <section>
      <div className="container eventDetails">
        <div className="topSection">
          <img
            src={fakeEventData.imageUrl}
            alt="event performer"
            className="performerPhoto"
          />
          <div className="rightSide">
            <div className="performerName">{fakeEventData.name}</div>
            <div className="datesAndLocation">
              <div className="dates">
                {fakeEventData.dateStart} - {fakeEventData.dateEnd}
              </div>
              <div className="location">
                <div className="venueName">{fakeEventData.venue.name}</div>
                <div className="venueAddress">
                  {fakeEventData.venue.address}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainBody">
          <div className="mainColumns">
            <div className="leftSide">
              <h3 className="sectionHeader">SHARE THIS</h3>

              <div className="shareThis">
                <div className="socialLinks">
                  <a href="/">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/email.png`}
                      alt="email"
                    />
                  </a>
                  <a href="/">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/facebook500.png`}
                      alt="facebook"
                    />
                  </a>
                  <a href="/">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/twitter.png`}
                      alt="twitter"
                    />
                  </a>
                </div>
                <button className="secondaryButton">+ ICAL</button>
                <button className="secondaryButton">+ GOOGLE CALENDAR</button>
              </div>

              <h3 className="sectionHeader">SHOW INFO</h3>
              <p>
                After becoming an accomplished stand up comedian, Chappelle
                debuted his own weekly sketch comedy show on Comedy Central
                called Chappelle's Show.
              </p>
              <p>
                In April 2007, Chappelle set a stand up endurance record at the
                Laugh Factory comedy club, beating comedian Dane Cook's record
                of three hours and 50 minutes.
              </p>

              <h3 className="sectionHeader">DATES & TIMES</h3>
              <div className="showTimes">
                <div>
                  Saturday, Aug 17, 2019 at 7:00 PM <a href="/">Get Tickets</a>
                </div>
                <div>
                  Saturday, Aug 17, 2019 at 7:00 PM <a href="/">Get Tickets</a>
                </div>
                <div>
                  Saturday, Aug 17, 2019 at 7:00 PM <a href="/">Get Tickets</a>
                </div>
                <div>
                  Saturday, Aug 17, 2019 at 7:00 PM <a href="/">Get Tickets</a>
                </div>
              </div>

              <h3 className="sectionHeader">DETAILS</h3>
              <div className="details">
                <ul>
                  <li>Ages 21+</li>
                  <li>General Admission</li>
                  <li>Doors open 30 min prior to show</li>
                  <li>2 item minimum</li>
                </ul>
              </div>

              <h3 className="sectionHeader">PERFORMERS</h3>
              <div className="performers">
                <div className="performer">
                  <img
                    src="https://www.fillmurray.com/100/100"
                    alt="performer 1"
                  />
                </div>
                <div className="performer">
                  <img
                    src="https://www.fillmurray.com/101/100"
                    alt="performer 2"
                  />
                </div>
                <div className="performer">
                  <img
                    src="https://www.fillmurray.com/102/100"
                    alt="performer 3"
                  />
                </div>
              </div>
            </div>
            <div className="rightSide">
              <h3 className="sectionHeader">VENUE</h3>
              <div className="venue">venue stuff here</div>
              <VenueMap
                centerLat={32.2}
                centerLong={-110.6}
                height="200px"
                markers={[fakeEventData.venue]}
              />
              <br />

              <iframe
                title="external video"
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/D80NLUcixPg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Carousel
            items={otherShows}
            title="OTHER SHOWS YOU MIGHT LIKE"
          />
        </div>
      </div>
    </section>
  );
}
