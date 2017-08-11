import React, { Component } from "react";
import styled from "styled-components";

class Price extends Component {
  render() {
    const Price = styled.h2`
      margin: 0;

      font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.1875rem;
      color: #111;
    `;
    return (
      <Price>
        {this.props.value} {this.props.currency}
      </Price>
    );
  }
}

export default Price;
