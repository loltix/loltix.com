import React, { useState, Fragment, useEffect } from "react";
import "./UpcomingShows.scss";
import EventRow from "../components/EventRow";
import Filters from "../components/Filters";
import apiService from "../api/service";
import InfiniteScroll from "react-infinite-scroller";

const PAGE_SIZE = 2;

export default function UpcomingShows() {
  const [eventData, setEventData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const loader = (
    <Fragment key={0}>
      <EventRow loading />
      <EventRow loading />
    </Fragment>
  );
  const numberItemsShown = eventData && eventData.length;
  let items = [];
  if (eventData) {
    eventData.forEach(event => {
      items.push(<EventRow key={event.id} event={event} />);
    });
  }

  const loadMore = () => {
    if (isFetching || !hasMore) {
      return;
    }
    console.log("DEBUG: load more");
    setIsFetching(true);
    apiService
      .getUpcomingShows({
        pageSize: PAGE_SIZE,
        offset
      })
      .then(response => {
        console.log("DEBUG: response = ", response);
        setIsFetching(false);
        setEventData([...eventData, ...response.results]);
        setHasMore(response.hasMore);
        setTotal(response.total);
        setOffset(response.offset);
      });
  };

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="container upcomingShows">
        <div className="upcomingShowsHeader">
          <h2>Upcoming Shows</h2>
          <Filters />
        </div>
        <div className="searchResultsContainer">
          {eventData && (
            <div className="count">
              {numberItemsShown} of {total} events within X miles of{" "}
              <span className="orangeText">Tuscon, AZ 85719</span>
            </div>
          )}

          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={loader}
          >
            <div className="results">{items}</div>
          </InfiniteScroll>

          <br />
        </div>
      </div>
    </section>
  );
}
