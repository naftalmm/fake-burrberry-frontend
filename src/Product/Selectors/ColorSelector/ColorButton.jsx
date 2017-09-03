import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 1rem;

  border-radius: 50%;
  border: solid 1px ${props => (props.isActive ? '#232122' : 'transparent')};
  background-color: ${props => props.colorHex};
  cursor: pointer;
`;

const Button = props => (
  <ButtonWrapper
    type="button"
    isActive={props.isActive}
    colorHex={props.colorHex}
    onClick={props.onClick}
  >
    <span hidden>Change colour to ${props.colorName}</span>
  </ButtonWrapper>
);

Button.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorHex: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
