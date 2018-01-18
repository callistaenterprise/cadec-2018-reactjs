import React from "react";
import { compose, withReducer, lifecycle, withProps, branch } from "recompose";
import { connect } from "react-redux";
import { api } from "cadec-2018-api";
import { selectors } from "cadec-2018-state";
import Main from "./main_navigation";

const _mapStateToProps = (state, ownProps) => ({
  period: selectors.getPeriod(state)
});

export default compose(
  connect(_mapStateToProps),
  api.events
)(Main);
