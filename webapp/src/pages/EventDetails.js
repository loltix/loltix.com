import React, { useEffect, useState } from "react";
import "./EventDetails.scss";
import { useParams } from "react-router-dom";
import VenueMap from "../components/VenueMap";
import Carousel from "../components/Carousel";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import apiService from "../api/service";

export default function EventDetails() {
  const { eventId } = useParams();

  const [eventData, setEventData] = useState(null);
  useEffect(() => {
    apiService.getEventDetails(eventId).then(response => {
      setEventData(response);
    });
  }, [eventId]);

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
              <h3 className="sectionHeader">DATES & TIMES</h3>
              <div className="showTimes">
                <table>
                  <tbody>
                    {eventData.showDates.map((showDate, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            {moment(showDate.date).format(
                              "dddd, MMMM D [at] h:mm A"
                            )}
                          </td>
                          <td>
                            <a href={showDate.ticketUrl}>Get Tickets</a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

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
          <div className="stickyTicketLink">
            <a href="/">TICKETS $20+</a>
          </div>
        </div>
      </div>
    </section>
  );
}
