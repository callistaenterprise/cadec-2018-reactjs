import andreastell from "./images/andreastell.jpg";
import bjorngenfors from "./images/bjorngenfors.jpg";
import janvasternas from "./images/janvasternas.jpg";
import niklasantoncic from "./images/niklasantoncic.jpg";
import parwenaker from "./images/parwenaker.jpg";
import peterlarsson from "./images/peterlarsson.jpg";
import stephenwhite from "./images/stephenwhite.jpg";
import torbjornclaesson from "./images/torbjornclaesson.jpg";

// ---- images
const _images = {
  andreastell,
  bjorngenfors,
  janvasternas,
  niklasantoncic,
  parwenaker,
  peterlarsson,
  stephenwhite,
  torbjornclaesson
};
export const getImage = props => {
  console.log("---", props, _images[props.speaker]);
  return _images[props.speaker];
};
export const SpeakerImage = `
  align-self: flex-end;
  width: 64px;
  height: 64px;
  background-size: cover;
  border-radius: 32px;
  background-position: center;
`;
