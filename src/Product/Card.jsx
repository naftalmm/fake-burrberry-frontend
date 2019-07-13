/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { FormattedPlural } from 'react-intl';
import FormattedPrice from './FormattedPrice';
import Heart from '../common/Buttons/AddToFavouritesButton';

const Image = styled.img`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 100%;
  height: auto;

  vertical-align: middle;
`;

const ProductName = styled.p`
  margin-top: 0;
  margin-bottom: 0.25rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 600;
  color: #171717;

  @media only screen and (min-width: 48rem) {
    font-size: .875rem;
    line-height: 1.25rem;
  }

  @media only screen and (min-width: 62rem) {
    font-size: 1rem;
  }
`;

const PromoLabel = styled.p`
  margin-top: 0;
  margin-bottom: .5rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
`;

const Price = styled(FormattedPrice)`
  margin-top: .5rem;
  margin-bottom: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
`;

const Link = styled(RouterLink)`
  border-bottom: solid 1px #171717
`;

const ProductNameLink = ({ to, name }) => (
  <RouterLink to={to}>
    <ProductName>
      {name}
    </ProductName>
  </RouterLink>
);

ProductNameLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const AddToFavouritesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NColorsAvailable = styled.p`
  margin: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
`;

const Card = ({
  className, promoLabel, isInFavourites, to, name, colors, src, alt, id, priceValue, priceCurrency,
}) => {
  const PromoLabelLine = () => promoLabel != null
    && (
    <AddToFavouritesWrapper>
      <PromoLabel>
        {promoLabel}
      </PromoLabel>
      <Heart filled={isInFavourites} />
    </AddToFavouritesWrapper>
    );

  const ProductNameWrapper = () => (promoLabel != null
    ? <ProductNameLink to={to} name={name} />
    : (
      <AddToFavouritesWrapper>
        <ProductNameLink to={to} name={name} />
        <Heart filled={isInFavourites} />
      </AddToFavouritesWrapper>
    ));

  const NColorsAvailableWrapper = () => colors > 0
    && (
    <NColorsAvailable>
      Available in&nbsp;
      <Link to="">
        {colors}
        &nbsp;
        <FormattedPlural value={colors} one="colour" other="colours" />
      </Link>
    </NColorsAvailable>
    );

  return (
    <div className={className}>
      <RouterLink to={to}>
        <Image src={`${src}?$BBY_V2_ML_3X4$&wid=600&hei=800`} alt={alt} />
      </RouterLink>
      <PromoLabelLine />
      <ProductNameWrapper id={id} name={name} />
      <NColorsAvailableWrapper colors={colors} />
      <RouterLink to={to}>
        <Price value={priceValue} currency={priceCurrency} />
      </RouterLink>
    </div>
  );
};

Card.defaultProps = {
  isInFavourites: false,
  className: '',
  promoLabel: '',
  colors: 0,
  alt: 'Product photo',
};

Card.defaultProps = {
  isInFavourites: false,
};

Card.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  promoLabel: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  priceValue: PropTypes.number.isRequired,
  priceCurrency: PropTypes.string.isRequired,
  isInFavourites: PropTypes.bool,
  colors: PropTypes.number,
};

export default styled(Card)`
  display: block;
  margin-bottom: 2rem;
  
  & a {
    color: #171717;
    text-decoration: none;
  }
`;
