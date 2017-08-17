import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import triangle from '../../triangle.svg';

const AccordionPaneHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;

  &:after {
    margin-right: 1rem;
    transform: ${props => (props.isOpened ? 'rotate(180deg)' : 'none')};
    content: url(${triangle});
  }
`;

const ButtonWrapper = styled.button`
  padding: 0;
  margin-left: 1rem;

  background-color: transparent;
  border: none;
`;

const Header = styled.h2`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-align: left;
  color: #171717;
`;

const AccordionPaneHeader = props => (
  <AccordionPaneHeaderWrapper isOpened={props.isOpened}>
    <ButtonWrapper type="button">
      <Header>
        {props.name}
      </Header>
    </ButtonWrapper>
  </AccordionPaneHeaderWrapper>
);

AccordionPaneHeader.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default AccordionPaneHeader;
