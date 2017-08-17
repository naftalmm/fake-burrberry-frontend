import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormattedPrice from './FormattedPrice';
import VendorCode from './VendorCode';
import { XsMd } from '../common/Responsive';

const InfoWrapper = styled.div`
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

const Info = props =>
  (<InfoWrapper>
    <Price value={props.priceValue} currency={props.priceCurrency} />
    <XsMd>
      <VendorCode value={props.vendorCode} />
    </XsMd>
  </InfoWrapper>);

Info.propTypes = {
  priceValue: PropTypes.number.isRequired,
  priceCurrency: PropTypes.string.isRequired,
  vendorCode: PropTypes.string.isRequired,
};

export default Info;
