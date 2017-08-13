import React from "react";
import styled from "styled-components";
import SectionHeader from "../common/SectionHeader";
import ProductCard from "./ProductCard";

const Recommended = styled.section`
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 62rem) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

const Header = styled(SectionHeader)`
  @media only screen and (min-width: 62rem) {
    margin-bottom: 2rem;
  }
`;

export default () => {
  return (
    <Recommended>
      <div className="container">
        <div className="row center-lg">
          <div className="col-xs-12">
            <Header>WE RECOMMEND</Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <ProductCard
              src="img/img1.jpg"
              alt="Recommended product photo"
              name="Emroided Hooded"
              priceValue={27000}
              priceCurrency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <ProductCard
              src="img/img2.jpg"
              alt="Recommended product photo"
              name="Relaxed Fit Stretch Jeans"
              priceValue={22500}
              priceCurrency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <ProductCard
              src="img/img3.jpg"
              alt="Recommended product photo"
              name="Leather and House Check"
              priceValue={120000}
              priceCurrency="RUB"
            />
          </div>
          <div className="col-xs-6 col-md-3">
            <ProductCard
              src="img/img4.jpg"
              alt="Recommended product photo"
              name="Leather Wingtip Check"
              priceValue={46000}
              priceCurrency="RUB"
            />
          </div>
        </div>
      </div>
    </Recommended>
  );
};
