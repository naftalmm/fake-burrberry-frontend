import React, { Component } from "react";
import styled from "styled-components";

class ProductCard extends Component {
  render() {
    const ProductCard = styled.a`
      display: block;
      margin-bottom: 2rem;
      margin-left: .5rem;

      @media only screen and (min-width: 48rem) {
        margin-left: 0;
      }
    `;

    const Image = styled.img`
      in-width: 130px;
      width: 100%;
      max-width: 100%;
      height: auto;

      vertical-align: middle;
    `;

    const ProductName = styled.p`
      margin-top: .5rem;
      margin-bottom: 0;

      font-family: Lora;
      font-size: 1rem;
      line-height: 1.1875rem;
      color: #171717;
    `;

    const ProductPrice = styled.p`
      margin-top: .5rem;
      margin-bottom: 0;

      font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: .75rem;
      line-height: .875rem;
      color: #999;
    `;

    return (
      <ProductCard>
        <Image src={this.props.src} alt={this.props.alt} />
        <ProductName>
          {this.props.name}
        </ProductName>
        <ProductPrice>{this.props.priceValue} {this.props.priceCurrency}</ProductPrice>
      </ProductCard>
    );
  }
}

export default ProductCard;