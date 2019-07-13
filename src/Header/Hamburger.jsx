import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import hamburger from '../assets/hamburger.svg';

const Button = ({ className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    <img src={hamburger} alt="Open menu" />
  </button>
);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default styled(Button)`
  padding: 0;
  margin-top: 1rem;

  background: none;
  border: none;
  cursor: pointer;
  ${props => props.isSideNavOpened && css`pointer-events: none;`};
`;
