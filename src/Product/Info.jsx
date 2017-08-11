import React, { Component } from "react";
import styled from "styled-components";
import Price from "./Price";
import VendorCode from "./VendorCode";

class Info extends Component {
  render() {
    const Info = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: 1rem;

      @media only screen and (min-width: 48rem) {
        margin-top: 0;
        margin-right: -.5rem;
      }
    `;

    return (
      <Info>
        <Price value={this.props.priceValue} currency={this.props.priceCurrency} />
        <VendorCode value={this.props.vendorCode} />
      </Info>
    );
  }
}

export default Info;
