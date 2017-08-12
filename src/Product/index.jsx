import React from "react";
import styled from "styled-components";
import Desktop from "./../common/Responsive/Desktop";
import TabletOrMobile from "./../common/Responsive/TabletOrMobile";
import { Helmet } from "react-helmet";
import Photo from "./Photo";
import Photos from "./PhotosCarousel";
import Info from "./Info";
import Title from "./Title";
import Actions from "./Actions";
import DeliveryFeature from "./../Delivery/DeliveryFeature";

const Product = styled.div`
  @media only screen and (min-width: 48rem) {
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 62rem) {
    margin-bottom: 4rem;
    background-color: ${props => props.backgroundColor};
  }
`;

export default props => {
  return (
    <div>
      <Helmet>
        <title>
          {props.title + " | Men - Burberry"}
        </title>
      </Helmet>
      <Product backgroundColor={props.backgroundColor}>
        <main className="container">
          <TabletOrMobile>
            <div className="row">
              <div className="col-xs-12">
                <Title>
                  {props.title}
                </Title>
              </div>
            </div>
          </TabletOrMobile>
          <div className="row middle-lg">
            <div className="col-xs-12 col-md-7 col-lg-6">
              <TabletOrMobile>
                <Photos />
              </TabletOrMobile>
              <Desktop>
                <Photo
                  srcSet="img/bitmap_4@2x.jpg 600w, img/bitmap_4@3x.jpg 900w"
                  src="img/bitmap_4.jpg"
                  alt="Product photo"
                />
              </Desktop>
            </div>
            <div className="col-xs-12 col-md-5 col-lg-6">
              <Desktop>
                <Title>
                  {props.title}
                </Title>
              </Desktop>
              <Info
                priceValue={props.priceValue}
                priceCurrency={props.priceCurrency}
                vendorCode={props.vendorCode}
              />
              <Actions />
              <Desktop>
                <DeliveryFeature
                  name="Free Next Day Delivery"
                  description="Order before 7pm Monday to Thursday for delivery the next day"
                />
              </Desktop>
            </div>
          </div>
        </main>
      </Product>
    </div>
  );
};
