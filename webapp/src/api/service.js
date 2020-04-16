import fakeEventData from "../mockdata/fakeEventData";

let instance = null; // singleton

const ARTIFICIAL_DELAY = 500;

class ApiService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
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
      setTimeout(() => {
        const end = offset + pageSize;
        const results = [...fakeEventData.slice(offset, offset + pageSize)];
        const total = fakeEventData.length;
        const hasMore = total > end;
        fulfill({
          results,
          total,
          offset: end,
          hasMore
        });
      }, ARTIFICIAL_DELAY);
    });
  }
}
export default new ApiService();
