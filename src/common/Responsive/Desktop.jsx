import React from "react";
import Responsive from "react-responsive";

export default ({ children }) =>
  <Responsive minWidth={992}>{children}</Responsive>;
