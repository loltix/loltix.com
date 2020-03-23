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
          <Route path="/venues">
            <Venues />
          </Route>
          <Route path="/comedians">
            <Comedians />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/event/:eventId">
            <EventDetails />
          </Route>
          <Route path="/">
            <UpcomingShows />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
