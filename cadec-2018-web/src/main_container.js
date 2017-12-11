import { compose, withReducer, lifecycle, withProps, branch } from "recompose";
import * as R from "ramda";
import * as api from "./api/cadec_api";
import Main from "./main";

const LOAD_CADEC_REQUEST = "LOAD_CADEC_REQUEST";
const LOAD_CADEC_SUCCESS = "LOAD_CADEC_SUCCESS";
const getCadecAction = year => ({
  type: "LOAD_CADEC_REQUEST",
  payload: {
    year
  }
});
const getCadecSuccessAction = cadec => ({
  type: "LOAD_CADEC_SUCCESS",
  payload: {
    cadec
  }
});
export default compose(
  withReducer(
    "cadecState",
    "cadecDispatch",
    (state, action) =>
      R.cond([
        [R.equals(LOAD_CADEC_SUCCESS), 
          R.always(R.mergeDeepRight(state, action.payload.cadec))
        ],
        [R.T, state]
      ])(action.type),
    {
      year: undefined,
      speakers: {},
      talks: {}
    }
  ),
  withProps(({ cadecDispatch }) => ({
    getCadec: year => cadecDispatch(getCadecAction(year)),
    getCadecSuccess: cadec => cadecDispatch(getCadecSuccessAction(cadec))
  })),
  lifecycle({
    componentDidMount() {
      const { getCadecSuccess } = this.props;
      api.getCadec("2018").then(getCadecSuccess);
    }
  })
)(Main);
