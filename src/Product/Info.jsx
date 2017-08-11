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

const StyledPrice = styled(Price)`
  margin: 0;
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #111;
`;

export default props => {
  return (
    <Info>
      <StyledPrice value={props.priceValue} currency={props.priceCurrency} />
      <VendorCode value={props.vendorCode} />
    </Info>
  );
};
