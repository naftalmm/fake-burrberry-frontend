import React from "react";
import Responsive from "react-responsive";

const brakepoints = {
  md: 768,
  lg: 992
};

export const XS = ({ children }) =>
  <Responsive maxWidth={brakepoints.md - 1}>
    {children}
  </Responsive>;

export const XS_MD = ({ children }) =>
  <Responsive maxWidth={brakepoints.lg - 1}>
    {children}
  </Responsive>;

export const MD = ({ children }) =>
  <Responsive minWidth={brakepoints.md} maxWidth={brakepoints.lg - 1}>
    {children}
  </Responsive>;

export const MD_LG = ({ children }) =>
  <Responsive minWidth={brakepoints.md}>
    {children}
  </Responsive>;

export const LG = ({ children }) =>
  <Responsive minWidth={brakepoints.lg}>
    {children}
  </Responsive>;
