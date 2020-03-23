import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./HeaderMenu.scss";

export default function HeaderMenu({ open, setMenuOpen }) {
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
  }, [location, setMenuOpen]);
  return (
    <div className={`container headerMenu ${open ? "showMobileMenu" : ""}`}>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Events Calendar</Link>
        </li>
        <li className={location.pathname === "/comedians" ? "active" : ""}>
          <Link to="/comedians">Comedians</Link>
        </li>
        <li className={location.pathname === "/venues" ? "active" : ""}>
          <Link to="/venues">Venues</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <a href="/about">About LOL tix</a>
        </li>
      </ul>
    </div>
  );
}
