import React from 'react';
import styled from 'styled-components';
import { MdLg } from '../common/Responsive';
import SectionHeader from '../common/SectionHeader';
import DeliveryFeature from './DeliveryFeature';

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;

  vertical-align: middle;
  object-fit: contain;
`;

const { PUBLIC_URL } = process.env;
export default () => (
  <div className="box">
    <div className="row middle-lg">
      <MdLg>
        <div className="col-md-7">
          <Image
            src={`${PUBLIC_URL}/img/delivery.jpg`}
            srcSet={`${PUBLIC_URL}/img/delivery@2x.jpg 2x, ${PUBLIC_URL}/img/delivery@3x.jpg 3x`}
            alt="Product boxing"
          />
        </div>
      </MdLg>
      <div className="col-lg-1" />
      <div className="col-xs-12 col-md-5 col-lg-4">
        <MdLg>
          <SectionHeader>DELIVERY</SectionHeader>
        </MdLg>
        <DeliveryFeature
          name="Free Next Day Delivery"
          description="Order before 7pm Monday to Thursday for delivery the next day"
        />
        <DeliveryFeature
          name="Collect-in-Store"
          description="Order online today and pick up your items in store as early as tomorrow"
        />
        <DeliveryFeature name="Free Returns" description="Enjoy free returns on your order" />
        <DeliveryFeature
          name="Free Gift Packaging"
          description="Discover our gift packaging, a gold lined box tied with a coloured ribbon"
        />
      </div>
    </div>
  </div>
);
