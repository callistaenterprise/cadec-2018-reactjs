import React from "react";
import { branch, renderComponent } from "recompose";
export default Spinner => isLoading =>
  branch(
    isLoading,
    renderComponent(Spinner) // `Spinner` is a React component
  )
