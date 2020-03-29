import React from "react";
import "./Comedians.scss";
import {
  yearsPerforming,
  comedyStyles,
  comedianListSortBy
} from "../util/constants";
import OptionList from "../components/OptionList";
import ComedianRow from "../components/ComedianRow";

export default function Comedians() {
  return (
    <section>
      <div className="container comedians">
        <div className="comediansHeader">
          <h2>Comedians</h2>
          <div className="sortBy">
            <label>Sort By:</label>
            <select>
              {comedianListSortBy.map(item => {
                return <option key={item.value}>{item.display}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="comedianResultContainer">
          <div className="topSection">
            <div className="countSection">
              1-6 of over 35 results for "
              <span className="orangeText">hipster</span>" within 50 miles of{" "}
              <span className="orangeText">Tuscon, AZ 85719</span>
            </div>
          </div>

          <div className="comedianList">
            <div className="refineSearch">
              <div>
                <input placeholder="new search" className="newSearchInput" />
              </div>
              <h3>Refine Search</h3>
              <div className="soloCheckbox">
                <label>
                  <input type="checkbox" value="" /> Only display comics with
                  upcoming shows
                </label>
              </div>
              <OptionList
                title="Comedy Style"
                options={comedyStyles}
                groupName={"comedyStyle[]"}
              />
              <div className="soloCheckbox">
                <label>
                  <input type="checkbox" value="" /> Has Video
                </label>
              </div>
              <OptionList
                title="Years Performing"
                options={yearsPerforming}
                groupName={"yearsPerforming[]"}
              />
            </div>
            <div className="comedianListResults">
              <ComedianRow
                id="matt-ziemak"
                imageUrl="https://www.fillmurray.com/100/120"
                bioAndCredits="-Finalist in the 2016 Arizona's Funniest Comedian"
                comedyStyles="Absurd, Silly, Smart, Hipster"
                location="Tuscon, AZ"
                name="Matt Ziemak"
                videoImageUrl="https://www.fillmurray.com/160/120"
                yearsExperience="4"
              />
              <ComedianRow
                id="paully-casillas"
                imageUrl="https://www.fillmurray.com/101/121"
                bioAndCredits="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   "
                comedyStyles="Absurd, Silly, Smart, Hipster"
                location="Tuscon, AZ"
                name="Paully Casillas"
                videoImageUrl="https://www.fillmurray.com/161/121"
                yearsExperience="4"
              />
              <ComedianRow
                id="robert-mac"
                imageUrl="https://www.fillmurray.com/102/122"
                bioAndCredits="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   "
                comedyStyles="Absurd, Silly, Smart, Hipster"
                location="Tuscon, AZ"
                name="Robert Mac"
                videoImageUrl="https://www.fillmurray.com/162/122"
                yearsExperience="4"
              />
              <ComedianRow
                id="paully-casilla"
                imageUrl="https://www.fillmurray.com/103/123"
                bioAndCredits="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   "
                comedyStyles="Absurd, Silly, Smart, Hipster"
                location="Tuscon, AZ"
                name="Paully Casillas"
                videoImageUrl="https://www.fillmurray.com/163/123"
                yearsExperience="4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
