import React from "react";
import Responsive from "react-responsive";

export const XS = ({ children }) =>
  <Responsive maxWidth={767}>
    {children}
  </Responsive>;

export const XS_MD = ({ children }) =>
  <Responsive maxWidth={991}>
    {children}
  </Responsive>;

export const MD = ({ children }) =>
  <Responsive minWidth={768} maxWidth={991}>
    {children}
  </Responsive>;

export const MD_LG = ({ children }) =>
  <Responsive minWidth={768}>
    {children}
  </Responsive>;

export const LG = ({ children }) =>
  <Responsive minWidth={992}>
    {children}
  </Responsive>;
