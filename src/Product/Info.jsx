import React from "react";
import styled from "styled-components";
import FormattedPrice from "./FormattedPrice";
import VendorCode from "./VendorCode";
import {Xs_Md} from "../common/Responsive";

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 1rem;

  @media only screen and (min-width: 48rem) {
    margin-top: 0;
    margin-right: -.5rem;
  }

  @media only screen and (min-width: 62rem) {
    margin-bottom: 3rem;
  }
`;

const Price = styled(FormattedPrice)`
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
      <Price value={props.priceValue} currency={props.priceCurrency} />
      <Xs_Md>
        <VendorCode value={props.vendorCode} />
      </Xs_Md>
    </Info>
  );
};
