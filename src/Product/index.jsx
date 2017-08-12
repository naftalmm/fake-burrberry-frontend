import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import PhotosCarousel from "./PhotosCarousel";
import Info from "./Info";
import ColorSelector from "../common/ColorSelector/index";
import Actions from "./Actions";

const Title = styled.h1`
  padding: 1rem;
  margin: 0;

  font-family: Lora;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: left;
  color: #111111;

  @media only screen and (min-width: 48rem) {
    padding: 1.5rem .5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
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
      <Title>
        {props.title}
      </Title>
      <main className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-7">
            <PhotosCarousel />
          </div>

          <div className="col-xs-12 col-md-5">
            <Info
              priceValue={props.priceValue}
              priceCurrency={props.priceCurrency}
              vendorCode={props.vendorCode}
            />
            <ColorSelector />

            <Actions />
          </div>
        </div>
      </main>
    </div>
  );
};
