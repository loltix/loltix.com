import React, { useEffect, useState } from "react";
import "./EventDetails.scss";
import { useParams } from "react-router-dom";
import VenueMap from "../components/VenueMap";
import Carousel from "../components/Carousel";
import Skeleton from "react-loading-skeleton";
import moment from "moment";

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
    logoUrl: "https://i.picsum.photos/id/512/120/120.jpg",
    webUrl: "http://laffstuscon",
    phoneNumber: "(520) 323-8869"
  },
  showDates: [
    { date: "2020-08-17T15:00:27.87+00:20", ticketUrl: "/" },
    { date: "2020-08-18T15:00:27.87+00:20", ticketUrl: "/" },
    { date: "2020-08-19T15:00:27.87+00:20", ticketUrl: "/" },
    { date: "2020-08-20T15:00:27.87+00:20", ticketUrl: "/" }
  ],
  details: [
    "Ages 21+",
    "General Admission",
    "Doors open 30 min prior to show",
    "2 item minimum"
  ],
  descriptionText: [
    "After becoming an accomplished stand up comedian, Chappelle  debuted his own weekly sketch comedy show on Comedy Central called Chappelle's Show.",
    "In April 2007, Chappelle set a stand up endurance record at the Laugh Factory comedy club, beating comedian Dane Cook's record of three hours and 50 minutes."
  ],
  videoLink: "https://www.youtube.com/embed/D80NLUcixPg",
  performers: [
    {
      avatarUrl: "https://www.fillmurray.com/100/100",
      name: "Performer 1"
    },
    {
      avatarUrl: "https://www.fillmurray.com/100/102",
      name: "Performer 2"
    },
    {
      avatarUrl: "https://www.fillmurray.com/100/101",
      name: "Performer 3"
    }
  ],
  otherShows: [
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
  ],
  socialLinks: {
    facebook: "http://facebook.com/asdfasdfasdfsd",
    twitter: "http://twitter.com/asdfasdfasdfasdfsadf",
    email: "foo@bar.com"
  }
};

export default function EventDetails() {
  const { eventId } = useParams();
  useEffect(() => {
    console.log("event id = ", eventId);
    window.scrollTo(0, 0);
  }, [eventId]);

  const [eventData, setEventData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setEventData(fakeEventData);
    }, 1000);
  });

  if (!eventData) {
    return (
      <section>
        <div className="container eventDetails">
          <div className="topSection">
            <div style={{ width: "100%" }}>
              <Skeleton height={200} />
            </div>
          </div>
          <div className="mainBody">
            <div style={{ width: "100%" }}>
              <Skeleton height={700} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const smallPerformers =
    eventData.performers.length && eventData.performers.length >= 3;

  return (
    <section>
      <div className="container eventDetails">
        <div className="topSection">
          <img
            src={eventData.imageUrl}
            alt="event performer"
            className="performerPhoto"
          />
          <div className="rightSide">
            <div className="performerName">{eventData.name}</div>
            <div className="datesAndLocation">
              <div className="dates">
                {eventData.dateStart} - {eventData.dateEnd}
              </div>
              <div className="location">
                <div className="venueName">{eventData.venue.name}</div>
                <div className="venueAddress">{eventData.venue.address}</div>
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
                  {eventData.socialLinks && eventData.socialLinks.email && (
                    <a
                      href={eventData.socialLinks.email}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/email.png`}
                        alt="email"
                      />
                    </a>
                  )}
                  {eventData.socialLinks && eventData.socialLinks.facebook && (
                    <a
                      href={eventData.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/facebook500.png`}
                        alt="facebook"
                      />
                    </a>
                  )}
                  {eventData.socialLinks && eventData.socialLinks.twitter && (
                    <a
                      href={eventData.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/twitter.png`}
                        alt="twitter"
                      />
                    </a>
                  )}
                </div>
                <button className="secondaryButton">+ ICAL</button>
                <button className="secondaryButton">+ GOOGLE CALENDAR</button>
              </div>

              <h3 className="sectionHeader">SHOW INFO</h3>
              {eventData.descriptionText.map((description, i) => {
                return <p key={i}>{description}</p>;
              })}

              <h3 className="sectionHeader">DATES & TIMES</h3>
              <div className="showTimes">
                {eventData.showDates.map((showDate, i) => {
                  return (
                    <div key={i}>
                      {moment(showDate.date).format(
                        "dddd, MMMM Do [at] h:mm a"
                      )}{" "}
                      <a href={showDate.ticketUrl}>Get Tickets</a>
                    </div>
                  );
                })}
              </div>

              <h3 className="sectionHeader">DETAILS</h3>
              <div className="details">
                <ul>
                  {eventData.details.map((detail, i) => {
                    return <li key={i}>{detail}</li>;
                  })}
                </ul>
              </div>

              <h3 className="sectionHeader">PERFORMERS</h3>
              <div className={`performers ${smallPerformers ? "small" : ""}`}>
                {eventData.performers.map((performer, i) => {
                  return (
                    <div className="performer" key={i}>
                      <img src={performer.avatarUrl} alt={performer.name} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rightSide">
              <div className="venueSection">
                <div className="venueDetails">
                  <h3 className="sectionHeader">VENUE</h3>
                  <div className="venueName">{eventData.venue.name}</div>
                  <div>{eventData.venue.address}</div>
                  <div>{eventData.venue.webUrl}</div>
                  <div>{eventData.venue.phoneNumber}</div>
                </div>
                <div className="venueLogo">
                  <img src={eventData.venue.logoUrl} alt="Venue" />
                </div>
              </div>

              <VenueMap
                centerLat={eventData.venue.position[0]}
                centerLong={eventData.venue.position[1]}
                height="200px"
                markers={[eventData.venue]}
              />
              <br />

              <iframe
                title="external video"
                width="100%"
                height="250"
                src={eventData.videoLink}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <Carousel
            items={eventData.otherShows}
            title="OTHER SHOWS YOU MIGHT LIKE"
          />
        </div>
      </div>
    </section>
  );
}
