import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

const breakpoints = {
  md: 768,
  lg: 992,
};

const Xs = ({ children }) => (
  <Responsive maxWidth={breakpoints.md - 1}>
    {children}
  </Responsive>
);

Xs.propTypes = {
  children: PropTypes.element.isRequired,
};

const XsMd = ({ children }) => (
  <Responsive maxWidth={breakpoints.lg - 1}>
    {children}
  </Responsive>
);

XsMd.propTypes = {
  children: PropTypes.element.isRequired,
};

const Md = ({ children }) => (
  <Responsive minWidth={breakpoints.md} maxWidth={breakpoints.lg - 1}>
    {children}
  </Responsive>
);

Md.propTypes = {
  children: PropTypes.element.isRequired,
};

const MdLg = ({ children }) => (
  <Responsive minWidth={breakpoints.md}>
    {children}
  </Responsive>
);

MdLg.propTypes = {
  children: PropTypes.element.isRequired,
};

const Lg = ({ children }) => (
  <Responsive minWidth={breakpoints.lg}>
    {children}
  </Responsive>
);

Lg.propTypes = {
  children: PropTypes.element.isRequired,
};

export {
  Xs, XsMd, Md, MdLg, Lg,
};
