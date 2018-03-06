import andreastell from "./images/andreastell.jpg";
import bjorngenfors from "./images/bjorngenfors.jpg";
import janvasternas from "./images/janvasternas.jpg";
import niklasantoncic from "./images/niklasantoncic.jpg";
import parwenaker from "./images/parwenaker.jpg";
import peterlarsson from "./images/peterlarsson.jpg";
import stephenwhite from "./images/stephenwhite.jpg";
import torbjornclaesson from "./images/torbjornclaesson.jpg";
import fika from "./images/fika.jpg";
import katarinaaskdal from "./images/katarinaaskdal.jpg";

// ---- images
const _images = {
  andreastell,
  bjorngenfors,
  janvasternas,
  niklasantoncic,
  parwenaker,
  peterlarsson,
  stephenwhite,
  torbjornclaesson,
  fika,
  katarinaaskdal
};
export const getImage = props => _images[props.speaker];

export const SpeakerImage = `
  align-self: flex-end;
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const SpeakerImageNative = `
  flex: 0;
  align-self: flex-end;
  width: 64;
  height: 64;
  border-radius: 32;
  resize-mode: cover;
`;
