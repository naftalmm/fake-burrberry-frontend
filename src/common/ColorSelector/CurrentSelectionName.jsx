import React, { Component } from "react";
import styled from "styled-components";

class CurrentSelectionName extends Component {
  render() {
    const CurrentSelectionName = styled.p`
      margin: 0;

      font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: .75rem;
      line-height: 1rem;
    `;
    return (
      <CurrentSelectionName>
        Colour: {this.props.color}
      </CurrentSelectionName>
    );
  }
}

export default CurrentSelectionName;
