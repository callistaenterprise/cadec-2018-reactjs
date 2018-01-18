import { compose } from "recompose";
import { connect } from "react-redux";
import { api } from "cadec-2018-api";
import { actions } from "cadec-2018-state";
import { selectors } from "cadec-2018-state";
import Main from "./main";

const _mapStateToProps = (state, ownProps) => {
  return {
    period: selectors.getPeriod(state),
    currentTab: selectors.getCurrentTab(state)
  };
};



export default compose(
  connect(_mapStateToProps, actions),
  api.events
)(Main);
