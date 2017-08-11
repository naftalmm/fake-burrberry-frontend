import React from "react";
import styled from "styled-components";
import SectionHeader from "../common/SectionHeader";
import ProductCard from "./ProductCard";

export default () => {
  const Recommended = styled.section`
    margin: 3rem 1rem 1rem;

    @media only screen and (min-width: 48rem) {
      margin: 3rem .5rem 2rem;
    }
  `;

  const ProductCardsWrapper = styled.div`
    margin-left: -1.5rem;
    margin-right: -1rem;

    @media only screen and (min-width: 48rem) {
      margin-left: -1rem;
      margin-right: -.5rem;
    }
  `;

  return (
    <Recommended>
      <SectionHeader>WE RECOMMEND</SectionHeader>
      <ProductCardsWrapper>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <ProductCard
                src="img/img1.jpg"
                alt="Recommended product photo"
                name="Emroided Hooded"
                priceValue="27 000"
                priceCurrency="руб."
              />
            </div>
            <div className="col-xs-6 col-md-3">
              <ProductCard
                src="img/img2.jpg"
                alt="Recommended product photo"
                name="Relaxed Fit Stretch Jeans"
                priceValue="22 500"
                priceCurrency="руб."
              />
            </div>
            <div className="col-xs-6 col-md-3">
              <ProductCard
                src="img/img3.jpg"
                alt="Recommended product photo"
                name="Leather and House Check"
                priceValue="120 000"
                priceCurrency="руб."
              />
            </div>
            <div className="col-xs-6 col-md-3">
              <ProductCard
                src="img/img4.jpg"
                alt="Recommended product photo"
                name="Leather Wingtip Check"
                priceValue="46 000"
                priceCurrency="руб."
              />
            </div>
          </div>
        </div>
      </ProductCardsWrapper>
    </Recommended>
  );
};
