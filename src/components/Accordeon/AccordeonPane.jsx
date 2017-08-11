import React, { Component } from "react";
import styled from "styled-components";
import AccordeonPaneHeader from "./AccordeonPaneHeader";
import AccordeonPaneEntry from "./AccordeonPaneEntry";

class AccordeonPane extends Component {
  render() {
    const AccordeonPane = styled.div`
      padding-top: 2rem;
      border-top: solid 1px #c6c6c6;

      @media only screen and (min-width: 48rem) {
        padding-top: 1.5rem;
        border: none;
      }
    `;

    return (
      <AccordeonPane className={this.props.className}>
        <AccordeonPaneHeader
          isHiddenOnTablet={this.props.headerIsHiddenOnTablet}
          isOpened={this.props.isOpened}
          name={this.props.headerName}
        />
        <AccordeonPaneEntry
          isOpened={this.props.isOpened}
          children={this.props.children}
        />
      </AccordeonPane>
    );
  }
}

export default AccordeonPane;
