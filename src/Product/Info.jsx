import React from "react";
import styled from "styled-components";
import Price from "./Price";
import VendorCode from "./VendorCode";

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

export default (props) => {
  return (
    <Info>
      <Price value={props.priceValue} currency={props.priceCurrency} />
      <VendorCode value={props.vendorCode} />
    </Info>
  );
};
