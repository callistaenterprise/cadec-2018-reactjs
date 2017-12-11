import * as R from "ramda";
export const speakers = (state, year, speakers) => {
  const speakersState = R.pipe(R.pathOr({}, ["speakers"]), R.pick(speakers), R.values)(state);
  return speakersState;
}
