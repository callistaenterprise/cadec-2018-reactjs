import {compose, withProps} from "recompose";
import Speakers from "./speakers";
import * as cadecSelectors from "./cadec_selectors";
export default compose(
  withProps(({cadecState, year, speakers}) => ({
    speakers: cadecSelectors.speakers(cadecState, year, speakers)
  }))
)(Speakers);