import React from "react";
import styled, { css } from "styled-components";
import triangle from "../../triangle.svg";

const AccordionPaneHeader = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 2rem;

      &:after {
        margin-right: 1rem;
        transform: ${props => (props.isOpened ? "rotate(180deg)" : "none")};
        content: url(${triangle});

        @media only screen and (min-width: 48rem) {
          display: none;
        }
      }

      @media only screen and (min-width: 48rem) {
        margin-bottom: 1rem;

        border-top: none;
        ${props => props.isHiddenOnTablet && css`display: none;`};
      }
    `;

const ButtonWrapper = styled.button`
      padding: 0;
      margin-left: 1rem;

      background-color: transparent;
      border: none;

      @media only screen and (min-width: 48rem) {
        margin-left: .5rem;
      }
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

export default (props) => {
    return (
      <AccordionPaneHeader
        isOpened={props.isOpened}
        isHiddenOnTablet={props.isHiddenOnTablet}
      >
        <ButtonWrapper type="button">
          <Header>
            {props.name}
          </Header>
        </ButtonWrapper>
      </AccordionPaneHeader>
    );
  }
