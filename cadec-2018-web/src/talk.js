import React from "react";
import SpeakersContainer from "./speakers_container";
export default ({ talk: {title, description, time, start}, year, speakers, cadecState }) => (
  <talk>
    <h1>{title}</h1>
    <time>
      <span>{start}</span>
      <span>{time}</span>
    </time>
    <SpeakersContainer year={year} speakers={speakers} cadecState={cadecState}/>
    <p>{description}</p>
  </talk>
);
