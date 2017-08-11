import React from "react";
import styled from "styled-components";
import SectionHeader from "./../common/SectionHeader";
import DeliveryFeature from "./DeliveryFeature";

export default () => {
  const Delivery = styled.section`
    margin-left: -.5rem;
    margin-right: -.5rem;

    @media only screen and (min-width: 48rem) {
      margin-left: -1rem;
    }
  `;

  const Image = styled.img`
    min-width: 432px;
    width: 100%;
    max-width: 100%;
    height: auto;

    vertical-align: middle;
    object-fit: contain;
  `;

  return (
    <Delivery>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <Image
              src="img/delivery.jpg"
              srcSet="img/delivery@2x.jpg 2x, img/delivery@3x.jpg 3x"
              alt="Product boxing"
            />
          </div>
          <div className="col-md-5">
            <SectionHeader>DELIVERY</SectionHeader>
            <DeliveryFeature
              name="Free Next Day Delivery"
              description="Order before 7pm Monday to Thursday for delivery the next day"
            />
            <DeliveryFeature
              name="Collect-in-Store"
              description="Order online today and pick up your items in store as early as tomorrow"
            />
            <DeliveryFeature
              name="Free Returns"
              description="Enjoy free returns on your order"
            />
            <DeliveryFeature
              name="Free Gift Packaging"
              description="Discover our gift packaging, a gold lined box tied with a coloured ribbon"
            />
          </div>
        </div>
      </div>
    </Delivery>
  );
};
