import React from "react";
import styled, { css } from "styled-components";
import AccordionPaneHeader from "./AccordionPaneHeader";

const AccordionPane = styled.div`
  padding-top: 2rem;
  border-top: solid 1px #c6c6c6;
`;

const AccordionPaneEntry = styled.div`
  ${props => !props.isOpened && css`display: none`};
`;

export default props => {
  return (
    <AccordionPane className={props.className}>
      <AccordionPaneHeader isOpened={props.isOpened} name={props.headerName} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <AccordionPaneEntry isOpened={props.isOpened}>
              {props.content}
            </AccordionPaneEntry>
          </div>
        </div>
      </div>
    </AccordionPane>
  );
};
