import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import SubHeader from './SubHeader';
import ShowMore from './ShowMore';
import Category from '../Category';
import TextButton from '../../common/Buttons/TextButton';
import Text from './../List/Text';

const Button = styled(TextButton)`
  padding: 0.5rem 0.25 rem;
  border-bottom: solid 1px #171717;
`;

const Link = styled(RouterLink)`
  border-bottom: solid 1px #171717;

  color: #171717;
  text-decoration: none;
`;

const Delimiter = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 48rem) {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const MenSectionText = (
  <div>
    <Text>
      Explore our menswear collection for the season. Sculptural knitwear,&nbsp;
      <Link to="/men/sweatshirts">sweatshirts</Link>, artist overalls and oversized cabans feature
      alongside our signature trench coat in both heritage and seasonal…
      <Button type="button">More</Button>
    </Text>
  </div>
);

const HeritageTrenchCoatsCategory = (
  <Category
    section="men"
    title="Heritage Trench Coats"
    products={[
      {
        id: 1,
        promoLabel: 'Relaxed fit',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Westminster – Long Heritage Trench Coat',
        colors: 3,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 2,
        promoLabel: 'Classic fit',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Kensington – Mid-Length Heritage Trench Coat',
        colors: 4,
        priceValue: 129500,
        priceCurrency: 'RUB',
      },
      {
        id: 3,
        promoLabel: 'Tailored fit',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Sandringham – Mid-length Heritage Trench Coat',
        colors: 3,
        priceValue: 129500,
        priceCurrency: 'RUB',
      },
      {
        id: 4,
        promoLabel: 'Relaxed fit',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Chelsea – Short Heritage Trench Coat',
        colors: 3,
        priceValue: 119500,
        priceCurrency: 'RUB',
      },
      {
        id: 5,
        promoLabel: 'Relaxed fit',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Westminster – Long Heritage Trench Coat',
        colors: 3,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 6,
        promoLabel: 'Classic fit',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Kensington – Long Heritage Trench Coat',
        colors: 4,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 7,
        promoLabel: 'Tailored fit',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Sandringham Short Heritage Trench Coat',
        colors: 3,
        priceValue: 119500,
        priceCurrency: 'RUB',
      },
      {
        id: 8,
        promoLabel: 'Slim fit',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Chelsea – Long Heritage Trench Coat',
        colors: 3,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
    ]}
  />
);

const SingleBreastedCoatsCategory = (
  <Category
    section="men"
    title="Single Breasted Trench Coats"
    products={[
      {
        id: 1,
        promoLabel: 'Online Exclusive',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Brighton – Longline Car Coat',
        colors: 7,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 2,
        promoLabel: 'New in',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Brighton – Longline Car Coat',
        colors: 7,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 3,
        promoLabel: 'New in',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Brighton – Longline Car Coat',
        colors: 7,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 4,
        promoLabel: 'New in',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Brighton – Longline Car Coat',
        colors: 7,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 5,
        promoLabel: 'Online Exclusive',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Brighton – Longline Car Coat',
        colors: 7,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 6,
        promoLabel: 'New in',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Brighton – Longline Car Coat',
        colors: 7,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 7,
        promoLabel: 'New in',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Brighton – Longline Car Coat',
        colors: 7,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
      {
        id: 8,
        promoLabel: 'New in',
        src:
          'https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg',
        name: 'The Brighton – Longline Car Coat',
        colors: 7,
        priceValue: 139500,
        priceCurrency: 'RUB',
      },
    ]}
  />
);

const sections = {
  men: {
    title: 'Men’s Clothing',
    text: MenSectionText,
    categories: [HeritageTrenchCoatsCategory, SingleBreastedCoatsCategory],
  },
};

const Overlay = styled.div`
  position: relative;

  ${props =>
    props.isToggleOn &&
    css`
      &:after {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        background: #000;
        content: '';
      }
    `};
`;

class List extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  state = { isOverlayToggleOn: false };

  handleOverlayToggle = isOverlayToggleOn => this.setState({ isOverlayToggleOn });

  render() {
    const sectionName = this.props.match.params.section;
    // Stub for sections which are not done yet
    const section = sections[sectionName] == null ? sections.men : sections[sectionName];
    return (
      <div>
        <SubHeader
          title={section.title}
          text={section.text}
          handleDropdownButtonToggle={this.handleOverlayToggle}
        />
        <Overlay isToggleOn={this.state.isOverlayToggleOn}>
          <div className="container">
            {section.categories[0]}
            <Delimiter />
            {section.categories[1]}
          </div>
          <ShowMore currentlyShownCards={8} totalCards={17} />
        </Overlay>
      </div>
    );
  }
}

export default List;
