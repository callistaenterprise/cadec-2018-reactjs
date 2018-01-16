import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { actions } from "cadec-2018-state";
import { withRouter } from "react-router";
import Tabs from "./tabs";

const _mapDispatchToProps = (dispatch, { history: { push } }) => ({
  about: () => push("/"),
  after: () => {
    push("/talks?period=after");
    dispatch(actions.after());
  },
  before: () => {
    push("/talks?period=before");
    dispatch(actions.before());
  }
});
export default compose(withRouter, connect(null, _mapDispatchToProps))(Tabs);
