import React from "react";
import styled from "styled-components";
import AccordionPaneHeader from "./AccordionPaneHeader";
import AccordionPaneEntry from "./AccordionPaneEntry";

const AccordionPane = styled.div`
  padding-top: 2rem;
  border-top: solid 1px #c6c6c6;

  @media only screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    border: none;
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
      <AccordionPaneEntry isOpened={props.isOpened} children={props.children} />
    </AccordionPane>
  );
};
