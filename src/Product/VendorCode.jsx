import React, { Component } from "react";
import styled from "styled-components";

class VendorCode extends Component {
  render() {
    const VendorCode = styled.p`
      margin: 0;

      font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: .75rem;
      line-height: 1rem;
      color: #171717;
    `;
    return (
      <VendorCode>
        Item {this.props.value}
      </VendorCode>
    );
  }
}

export default VendorCode;
