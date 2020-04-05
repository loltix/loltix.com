import React, { useEffect } from "react";
import "./ComedianBio.scss";
import UpcomingShowList from "../components/upcomingShowList/UpcomingShowList";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import HeaderMenu from "../components/menu/HeaderMenu";

const comedian = {
  name: "Gabriel Iglesias",
  genres: "Clean, Animated, Latino, Hawaiian",
  yearsExperience: 18,
  imageUrl: "https://www.fillmurray.com/250/285",
  location: "Los Angeles, CA",
  bioText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

const otherPerformers = [
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

export default function ComedianBio() {
  const { comedianId } = useParams();
  useEffect(() => {
    console.log("comedianId = ", comedianId);
    window.scrollTo(0, 0);
  }, [comedianId]);

  return (
    <section>
      <div className="container comedianBio">
        <div className="comedianBioContainer">
          <div className="headerSection">
            <div className="name">{comedian.name}</div>
            <div className="genres">{comedian.genres}</div>
          </div>

          <div className="comedianDetails">
            <div className="photoArea">
              <img
                src={comedian.imageUrl}
                alt="comedian"
                className="comedianPhoto"
              />

              <div className="underPhotoDetails">
                <div className="icons">
                  <a href="/">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/twitter.png`}
                      alt="twitter"
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
                      src={`${process.env.PUBLIC_URL}/images/email.png`}
                      alt="email"
                    />
                  </a>
                </div>
                <div className="yearsExperience">
                  <strong>{comedian.yearsExperience} years</strong> experience
                </div>
                <div className="location">
                  Based out of <strong>{comedian.location}</strong>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div className="bio">
                <h3>
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px"
                    }}
                    src={`${process.env.PUBLIC_URL}/images/triangle-right-orange.png`}
                    alt="right triangle"
                  />
                  BIO
                </h3>
                <div className="bioText">{comedian.bioText}</div>
              </div>

              <div className="video">
                <h3>
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px"
                    }}
                    src={`${process.env.PUBLIC_URL}/images/triangle-right-orange.png`}
                    alt="right triangle"
                  />
                  VIDEO
                </h3>
                <div className="videoLink">
                  <iframe
                    title="external video"
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/D80NLUcixPg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <UpcomingShowList
          shows={[
            {
              id: "1",
              venue: "Laff's Comedy Caffe",
              cityState: "Tucson, AZ",
              showNameLine1: "Gabriel Iglesias Fluffy Tour",
              showNameLine2: "with feature Pauly Cassilas",
              days: "SAT",
              monthDay: "AUG 30"
            },
            {
              id: "2",
              venue: "Phoenix Improv",
              cityState: "Phoenix, AZ",
              showNameLine1: "Gabriel Iglesias Fluffy Tour",
              showNameLine2: "with feature Pauly Cassilas",
              days: "FRI - SUN",
              monthDay: "SEPT 1-3"
            },
            {
              id: "3",
              venue: "Funny Boné",
              cityState: "Tucson, AZ",
              showNameLine1: "Gabriel Iglesias Fluffy Tour",
              showNameLine2: "with feature Pauly Cassilas",
              days: "SAT - SUN",
              monthDay: "AUG 17-18"
            }
          ]}
        />

        <Carousel
          items={otherPerformers}
          title="OTHER PERFORMERS YOU MIGHT LIKE"
        />

        <HeaderMenu open={true} setMenuOpen={() => {}} darkBg={true}/>
      </div>
    </section>
  );
}
