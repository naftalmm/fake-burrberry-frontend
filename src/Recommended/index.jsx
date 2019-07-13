import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../common/SectionHeader';
import Card from '../Product/Card';

const Recommended = styled.section`
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

const Header = styled(SectionHeader)`
  @media only screen and (min-width: 62rem) {
    margin-bottom: 2rem;
  }
`;

export default () => (
  <Recommended>
    <div className="container">
      <div className="row center-lg">
        <div className="col-xs-12">
          <Header>WE RECOMMEND</Header>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            id={1}
            to="/men/coats/1"
            src="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg"
            alt="Recommended product photo"
            name="Emroided Hooded"
            priceValue={27000}
            priceCurrency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            id={2}
            to="/men/coats/2"
            src="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg"
            alt="Recommended product photo"
            name="Relaxed Fit Stretch Jeans"
            priceValue={22500}
            priceCurrency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            id={3}
            to="/men/coats/3"
            src="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg"
            alt="Recommended product photo"
            name="Leather and House Check"
            priceValue={120000}
            priceCurrency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            id={4}
            to="/men/coats/4"
            src="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg"
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
