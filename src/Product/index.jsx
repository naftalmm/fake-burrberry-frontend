import React from "react";
import styled from "styled-components";
import {XS_MD, LG} from "../common/Responsive";
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
          <XS_MD>
            <div className="row">
              <div className="col-xs-12">
                <Title>
                  {props.title}
                </Title>
              </div>
            </div>
          </XS_MD>
          <div className="row middle-lg">
            <div className="col-xs-12 col-md-7 col-lg-6">
              <XS_MD>
                <Photos />
              </XS_MD>
              <LG>
                <Photo
                  srcSet="img/bitmap_4@2x.jpg 600w, img/bitmap_4@3x.jpg 900w"
                  src="img/bitmap_4.jpg"
                  alt="Product photo"
                />
              </LG>
            </div>
            <div className="col-xs-12 col-md-5 col-lg-6">
              <LG>
                <Title>
                  {props.title}
                </Title>
              </LG>
              <Info
                priceValue={props.priceValue}
                priceCurrency={props.priceCurrency}
                vendorCode={props.vendorCode}
              />
              <Actions />
              <LG>
                <DeliveryFeature
                  name="Free Next Day Delivery"
                  description="Order before 7pm Monday to Thursday for delivery the next day"
                />
              </LG>
            </div>
          </div>
        </main>
      </Product>
    </div>
  );
};
