import React, { Component } from "react";
import styled, { css } from "styled-components";

class AccordeonPaneEntry extends Component {
  render() {
    const AccordeonPaneEntry = styled.div`
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
    return (
      <AccordeonPaneEntry isOpened={this.props.isOpened}>
        {this.props.children}
      </AccordeonPaneEntry>
    );
  }
}

export default AccordeonPaneEntry;
