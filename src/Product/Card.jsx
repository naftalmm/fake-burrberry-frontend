import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { FormattedPlural } from 'react-intl';
import FormattedPrice from './FormattedPrice';
import Heart from '../assets/Heart';

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

const ProductNameLink = props =>
  (<RouterLink to={props.to}>
    <ProductName>
      {props.name}
    </ProductName>
  </RouterLink>);

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

const Card = (props) => {
  const PromoLabelLine = () =>
    props.promoLabel != null &&
    <AddToFavouritesWrapper>
      <PromoLabel>
        {props.promoLabel}
      </PromoLabel>
      <Heart filled={props.isInFavourites} />
    </AddToFavouritesWrapper>;

  const ProductNameWrapper = () =>
    (props.promoLabel != null
      ? <ProductNameLink to={props.to} name={props.name} />
      : <AddToFavouritesWrapper>
        <ProductNameLink to={props.to} name={props.name} />
        <Heart filled={props.isInFavourites} />
      </AddToFavouritesWrapper>);

  const NColorsAvailableWrapper = () =>
    props.colors > 0 &&
    <NColorsAvailable>
      Available in&nbsp;
      <Link to="">
        {props.colors}&nbsp;
        <FormattedPlural value={props.colors} one="colour" other="colours" />
      </Link>
    </NColorsAvailable>;

  return (
    <div className={props.className}>
      <RouterLink to={props.to}>
        <Image src={`${props.src}?$BBY_V2_ML_3X4$&wid=600&hei=800`} alt={props.alt} />
      </RouterLink>
      <PromoLabelLine />
      <ProductNameWrapper id={props.id} name={props.name} />
      <NColorsAvailableWrapper colors={props.colors} />
      <RouterLink to={props.to}>
        <Price value={props.priceValue} currency={props.priceCurrency} />
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
