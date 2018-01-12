import * as R from "ramda";
// ---- actions
const TALK_PERIOD = "TALK_PERIOD";

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

export const actions = {
  before,
  after
};

// ---- selectors
const getPeriod = R.path(["events", "period"]);

export const selectors = {
  getPeriod
};

// ---- reducers
const defaultAction = { payload: {} };
const defaultState = { period: "before" };

export default (state = defaultState, action = defaultAction) => {
  switch (action.type) {
    case "TALK_PERIOD":
      return {
        period: action.payload.period
      };
    default:
      return state;
  }
};
