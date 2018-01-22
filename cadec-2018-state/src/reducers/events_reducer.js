import * as R from "ramda";
// ---- actions
const TALK_PERIOD = "TALK_PERIOD";
const TAB_SELECTION = "TAB_SELECTION";
const SEARCH_ON_TEXT_CHANGE = "SEARCH_ON_TEXT_CHANGE";

const before = () => ({
  type: TALK_PERIOD,
  payload: {
    period: "before"
  }
});

const after = () => ({
  type: TALK_PERIOD,
  payload: {
    period: "after"
  }
});

const onSearchTextChange = (tags = "") => ({
  type: SEARCH_ON_TEXT_CHANGE,
  payload: {
    tags
  }
});

const tabSelection = label => ({
  type: TAB_SELECTION,
  payload: {
    label
  }
});
export const actions = {
  before,
  after,
  tabSelection,
  onSearchTextChange
};

// ---- selectors
const getPeriod = R.path(["events", "period"]);
const getTags = R.path(["events", "tags"]);
const getCurrentTab = R.path(["events", "currentTab"]);

export const selectors = {
  getPeriod,
  getCurrentTab,
  getTags
};

// ---- reducers
const defaultAction = { payload: {} };
const defaultState = { period: "before", currentTab: "about" };

export default (state = defaultState, action = defaultAction) => {
  switch (action.type) {
    case TALK_PERIOD:
      return {
        ...state,
        period: action.payload.period
      };
    case TAB_SELECTION:
      return {
        ...state,
        currentTab: action.payload.label
      };
    case SEARCH_ON_TEXT_CHANGE:
      return {
        ...state,
        tags: action.payload.tags
      };
    default:
      return state;
  }
};
