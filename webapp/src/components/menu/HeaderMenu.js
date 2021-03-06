import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./HeaderMenu.scss";

export default function HeaderMenu({ open, setMenuOpen, darkBg = false }) {
  const location = useLocation();
  useEffect(() => {
    // close the menu whenever the URL changes
    setMenuOpen(false);
  }, [location, setMenuOpen]);

  return (
    <div
      className={`container headerMenu ${open ? "showMobileMenu" : ""} ${
        darkBg ? "dark" : ""
      }`}
    >
      <ul>
        <li className={location.pathname.includes("/event") ? "active" : ""}>
          <Link to={`${process.env.PUBLIC_URL}/events`}>Events Calendar</Link>
        </li>
        <li className={location.pathname.includes("/comedian") ? "active" : ""}>
          <Link to={`${process.env.PUBLIC_URL}/comedians`}>Comedians</Link>
        </li>
        <li className={location.pathname.includes("/venue") ? "active" : ""}>
          <Link to={`${process.env.PUBLIC_URL}/venues`}>Venues</Link>
        </li>
      </ul>
    </div>
  );
}
