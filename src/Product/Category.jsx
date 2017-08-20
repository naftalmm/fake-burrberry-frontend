import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Header = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;

  font-family: Lora;
  font-weight: 500;
  line-height: 1.1875rem;
  font-size: 1rem;
  color: #171717;

  @media only screen and (min-width: 48rem) {
    margin-top: 4rem;
    margin-bottom: 2rem;

    line-height: 1.5rem;
    font-size: 1.25rem;
  }
`;

const Category = (props) => {
  const { section } = props;
  const category = props.title.toLowerCase().split(' ').join('-');
  const cards = props.products.map(product =>
    (<div className="col-xs-6 col-md-3" key={product.id}>
      <Card
        id={product.id}
        to={`/${section}/${category}/${product.id}`}
        isInFavourites={product.isInFavourites}
        promoLabel={product.promoLabel}
        src={product.src}
        name={product.name}
        colors={product.colors}
        priceValue={product.priceValue}
        priceCurrency={product.priceCurrency}
      />
    </div>),
  );

  return (
    <section className={props.className}>
      <div className="box">
        <div className="row">
          <div className="col-xs-12">
            <Header>
              {props.title}
            </Header>
          </div>
        </div>
        <div className="row">
          {cards}
        </div>
      </div>
    </section>
  );
};

Category.defaultProps = {
  className: '',
};

Category.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Category;
