import React from "react";
import Responsive from "react-responsive";

export default ({ children }) =>
  <Responsive maxWidth={767}>
    {children}
  </Responsive>;
