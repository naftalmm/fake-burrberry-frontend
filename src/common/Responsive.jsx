import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

const breakpoints = {
  md: 768,
  lg: 992,
};

const Xs = props =>
  (<Responsive maxWidth={breakpoints.md - 1}>
    {props.children}
  </Responsive>);

Xs.propTypes = {
  children: PropTypes.element.isRequired,
};

const XsMd = props =>
  (<Responsive maxWidth={breakpoints.lg - 1}>
    {props.children}
  </Responsive>);

XsMd.propTypes = {
  children: PropTypes.element.isRequired,
};

const Md = props =>
  (<Responsive minWidth={breakpoints.md} maxWidth={breakpoints.lg - 1}>
    {props.children}
  </Responsive>);

Md.propTypes = {
  children: PropTypes.element.isRequired,
};

const MdLg = props =>
  (<Responsive minWidth={breakpoints.md}>
    {props.children}
  </Responsive>);

MdLg.propTypes = {
  children: PropTypes.element.isRequired,
};

const Lg = props =>
  (<Responsive minWidth={breakpoints.lg}>
    {props.children}
  </Responsive>);

Lg.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Xs, XsMd, Md, MdLg, Lg };
