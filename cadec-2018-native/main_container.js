import React from "react";
import { compose, withProps } from "recompose";
import { api } from "cadec-2018-api";
import { selectors } from "cadec-2018-state";
// import Main from "./main";
import Main from "./main_navigation";

const _mapStateToProps = (state, ownProps) => ({
  period: selectors.getPeriod(state),
  tags: selectors.getTags(state)
});

export default compose(
  withProps(() => ({
    period:undefined
  })),
  api.events
)(Main);
