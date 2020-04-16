import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // NOTE: this setTimeout, whilst hacky, prevents an
    // infinite scroll bug where infinite scroll keeps loading because
    // its always at the bottom of the page.
    // https://stackoverflow.com/questions/15691569/javascript-issue-with-scrollto-in-chrome
    window.setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [pathname]);

  return null;
}
