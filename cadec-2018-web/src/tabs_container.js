import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { actions, push } from "cadec-2018-state";
import { bindActionCreators } from "redux";
import Tabs from "./tabs";

export default compose(connect(null, actions))(Tabs);
