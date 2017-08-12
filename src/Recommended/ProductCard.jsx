import React from "react";
import styled from "styled-components";
import FormattedPrice from "./../Product/FormattedPrice";

const ProductCard = styled.a`
  display: block;
  margin-bottom: 2rem;
  margin-right: .5rem;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 0;
    margin-right: 0;
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

const Price = styled(FormattedPrice)`
  margin-top: .5rem;
  margin-bottom: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: .875rem;
  color: #999;
`;

export default props => {
  return (
    <ProductCard>
      <Image src={props.src} alt={props.alt} />
      <ProductName>
        {props.name}
      </ProductName>
      <Price value={props.priceValue} currency={props.priceCurrency} />
    </ProductCard>
  );
};
