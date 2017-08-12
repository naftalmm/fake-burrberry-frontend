import React from "react";
import styled, {css} from "styled-components";
import AccordionPaneHeader from "./AccordionPaneHeader";

const AccordionPane = styled.div`
  padding-top: 2rem;
  border-top: solid 1px #c6c6c6;

  @media only screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    border: none;
  }
`;

const AccordionPaneEntry = styled.div`
  ${props => !props.isOpened && css`display: none`};

  margin: 0 1rem 2rem 1rem;
  font-family: Lora;
  font-size: .875rem;
  line-height: 1.5rem;
  color: #171717;

  @media only screen and (min-width: 48rem) {
    display: block;

    margin-left: .5rem;
    margin-right: .5rem;
    margin-bottom: 1.5rem;
  }

  & p,
  ul,
  li {
    display: block;
    margin: 0;
    padding: 0;
  }
`;

export default props => {
  return (
    <AccordionPane className={props.className}>
      <AccordionPaneHeader
        isHiddenOnTablet={props.headerIsHiddenOnTablet}
        isOpened={props.isOpened}
        name={props.headerName}
      />
      <AccordionPaneEntry isOpened={props.isOpened} children={props.content} />
    </AccordionPane>
  );
};
