import * as R from "ramda";
// ---- actions
const TALK_PERIOD = "TALK_PERIOD";
const TAB_SELECTION = "TAB_SELECTION";

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

const tabSelection = label => ({
  type: TAB_SELECTION,
  payload: {
    label
  }
});
export const actions = {
  before,
  after,
  tabSelection
};

// ---- selectors
const getPeriod = R.path(["events", "period"]);
const getCurrentTab = R.path(["events", "currentTab"]);

export const selectors = {
  getPeriod,
  getCurrentTab
};

// ---- reducers
const defaultAction = { payload: {} };
const defaultState = { period: "before", currentTab: "about" };

export default (state = defaultState, action = defaultAction) => {
  switch (action.type) {
    case "TALK_PERIOD":
      return {
        period: action.payload.period
      };
    case "TAB_SELECTION":
      return {
        currentTab: action.payload.label
      };
    default:
      return state;
  }
};
