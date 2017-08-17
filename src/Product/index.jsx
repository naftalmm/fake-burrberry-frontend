import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { XsMd, Lg } from '../common/Responsive';
import Photo from './Photo';
import Photos from './PhotosCarousel';
import Info from './Info';
import Title from './Title';
import Actions from './Actions';
import DeliveryFeature from './../Delivery/DeliveryFeature';

const ProductWrapper = styled.div`
  @media only screen and (min-width: 48rem) {
    margin-bottom: 1.5rem;
  }

  @media only screen and (min-width: 62rem) {
    margin-bottom: 4rem;
    background-color: ${props => props.backgroundColor};
  }
`;

const Product = props =>
  (<div>
    <Helmet>
      <title>
        {`${props.title} | Men - Burberry`}
      </title>
    </Helmet>
    <ProductWrapper backgroundColor={props.backgroundColor}>
      <main className="container">
        <XsMd>
          <div className="row">
            <div className="col-xs-12">
              <Title>
                {props.title}
              </Title>
            </div>
          </div>
        </XsMd>
        <div className="row middle-lg">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <XsMd>
              <Photos />
            </XsMd>
            <Lg>
              <Photo
                srcSet="img/bitmap_4@2x.jpg 600w, img/bitmap_4@3x.jpg 900w"
                src="img/bitmap_4.jpg"
                alt="Product photo"
              />
            </Lg>
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <Lg>
              <Title>
                {props.title}
              </Title>
            </Lg>
            <Info
              priceValue={props.priceValue}
              priceCurrency={props.priceCurrency}
              vendorCode={props.vendorCode}
            />
            <Actions />
            <Lg>
              <DeliveryFeature
                name="Free Next Day Delivery"
                description="Order before 7pm Monday to Thursday for delivery the next day"
              />
            </Lg>
          </div>
        </div>
      </main>
    </ProductWrapper>
  </div>);


Product.defaultProps = {
  className: '',
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  priceValue: PropTypes.number.isRequired,
  priceCurrency: PropTypes.string.isRequired,
  vendorCode: PropTypes.string.isRequired,
};

export default Product;
