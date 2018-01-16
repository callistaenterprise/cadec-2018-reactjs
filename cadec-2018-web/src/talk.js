import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { dateUtils } from "cadec-2018-utils";
import Speakers from "./speakers";
import {
  Header3,
  TalkRow,
  TalkRowDivider,
  TalkRowContent,
  TalkRowText,
  SpeakerImage
} from "cadec-2018-styles/web";

const _time = startDate => moment.utc(startDate).format("HH:mm");
export default ({
  talk: { id, title, description, time, startDate },
  year,
  speakers = [],
  cadecState
}) => (
  <TalkRow>
    <TalkRowDivider>
      <Header3>{dateUtils.formattedTime(startDate)}</Header3>
    </TalkRowDivider>
    <TalkRowContent>
      <Link to={`/talks/${id}`}>
        <Header3>{title}</Header3>
        {speakers.map(speaker => (
          <div key={`speaker-${speaker.id}`}>{speaker.name}</div>
        ))}
      </Link>
      <div>
        {speakers.map(speaker => <SpeakerImage speaker={speaker.imageName} />)}
      </div>
    </TalkRowContent>
  </TalkRow>
);
