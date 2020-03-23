import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UpcomingShows from "./pages/UpcomingShows";
import Venues from "./pages/Venues";
import About from "./pages/About";
import Comedians from "./pages/Comedians";
import EventDetails from "./pages/EventDetails";

import TopHeader from "./components/TopHeader";
import HeaderMenu from "./components/HeaderMenu";

import "./App.scss";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <header>
        <TopHeader
          onMenuButtonClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <HeaderMenu open={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <div>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/venues`}>
            <Venues />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/comedians`}>
            <Comedians />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/about`}>
            <About />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/event/:eventId`}>
            <EventDetails />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/events`}>
            <UpcomingShows />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/`}>
            <UpcomingShows />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
