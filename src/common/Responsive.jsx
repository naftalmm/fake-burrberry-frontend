import React from "react";
import Responsive from "react-responsive";

const breakpoints = {
  md: 768,
  lg: 992
};

export const Xs = ({ children }) =>
  <Responsive maxWidth={breakpoints.md - 1}>
    {children}
  </Responsive>;

export const Xs_Md = ({ children }) =>
  <Responsive maxWidth={breakpoints.lg - 1}>
    {children}
  </Responsive>;

export const Md = ({ children }) =>
  <Responsive minWidth={breakpoints.md} maxWidth={breakpoints.lg - 1}>
    {children}
  </Responsive>;

export const Md_Lg = ({ children }) =>
  <Responsive minWidth={breakpoints.md}>
    {children}
  </Responsive>;

export const Lg = ({ children }) =>
  <Responsive minWidth={breakpoints.lg}>
    {children}
  </Responsive>;
