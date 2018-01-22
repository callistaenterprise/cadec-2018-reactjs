import * as R from "ramda";

export const filterOnTags = (tags = "", talks = []) => {
  tags = R.replace(/\*/g, "", tags);
  return R.pipe(
    R.filter(
      R.anyPass([
        R.propSatisfies(R.test(new RegExp(tags)), "title"),
        R.pipe(
          R.prop("speakers"),
          R.filter(R.propSatisfies(R.test(new RegExp(tags)), "name")),
          // speakers => {
          //   console.log("---after filter", speakers);
          //   return speakers;
          // },
          R.complement(R.isEmpty)
        ),
        R.propSatisfies(R.test(new RegExp(tags)), "description"),
        R.propSatisfies(R.test(new RegExp(tags)), "startDate")
      ])
    )
  )(talks);
};
