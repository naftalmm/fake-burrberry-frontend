import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import PhotosContainer from "./PhotosContainer";
import Info from "./Info";
import ColorSelector from "./../ColorSelector";
import Actions from "./Actions";

class Product extends Component {
  render() {
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

    return (
      <div>
        <Helmet>
          <title>
            {this.props.title + " | Men - Burberry"}
          </title>
        </Helmet>
        <Title>
          {this.props.title}
        </Title>
        <main className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <PhotosContainer />
            </div>

            <div className="col-xs-12 col-md-5">
              <Info
                priceValue={this.props.priceValue}
                priceCurrency={this.props.priceCurrency}
                vendorCode={this.props.vendorCode}
              />
              <ColorSelector />

              <Actions />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Product;
