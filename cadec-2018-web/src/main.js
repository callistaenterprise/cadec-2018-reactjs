import React from "react";
import Talks from "./talks";
export default ({ cadecState, cadecState: { year, talks } }) => (
  <div>
    <h1>Cadec {year}</h1>
    <Talks year={year} talks={talks} cadecState={cadecState} />
  </div>
);
