let instance = null; // singleton

// see the 'proxy' param in package.json that automatically proxy's
// all API requests when running in dev mode
const ROOT_API_URL =
  process.env.NODE_ENV !== "production" ? "" : "https://api.loltix.com";

class ApiService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  getEventDetails(eventId) {
    return new Promise((fulfill, reject) => {
      const url = `${ROOT_API_URL}/v1/events/${eventId}`;

      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(result => {
          fulfill(result);
        });
    });
  }

  getUpcomingShows({
    offset = 0,
    pageSize = 5,
    showFeaturedOnly = false,
    filters = {},
    dateRange = null,
    sortBy = null
  }) {
    return new Promise((fulfill, reject) => {
      const url = `${ROOT_API_URL}/v1/events?offset=${offset}&pageSize=${pageSize}`;

      fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(result => {
          let clone = Object.assign({}, result);
          // calculate the hasMore boolean
          const hasMore = clone.total >= offset + 1 + pageSize;
          clone.hasMore = hasMore;
          fulfill(clone);
        });
    });
  }
}
export default new ApiService();
