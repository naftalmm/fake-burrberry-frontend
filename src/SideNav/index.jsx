import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import enhanceWithClickOutside from 'react-click-outside';
import styled, { css } from 'styled-components';
import Logo from './../Header/Logo';
import SubNavigation from './SubNavigation';
import arrow from '../assets/arrow.svg';
import SelectorButton from './SelectorButton';

const SideNavWrapper = styled.nav`
  position: absolute;
  width: 274px;
  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const MainNavigation = styled.div`transition-duration: 0.25s;
${props =>
    props.isShiftedLeft &&
    css`
      transform: translate3d(-274px, 0, 0);
    `};
  `;

const SectionButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.125rem;
`;

const Header = styled.h2`
  margin: 2.25rem 0.5rem 0.5rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #171717;
`;

const Link = styled(NavLink)`
  display: block;
  padding: 0.75rem 0.5rem;

  text-decoration: none;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #171717;
`;

const SectionButton = styled.button`
  padding: 0.75rem 0.5rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  text-align: left;
  color: #171717;

  background: transparent;
  border: none;
  cursor: pointer;

  :: after {
    position: absolute;
    right: 0.5rem;
    display: inline-block;
    content: url(${arrow});
    transform: rotate(-90deg);
  }
`;

const subNavigation = [
  {
    title: 'Men',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/d68dce82ea0a299febf5a35de882c78f0d70ad7d.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New Arrivals', url: '/men/new-arrivals' },
      { title: 'Clothing', url: '/men/clothing' },
      { title: 'Scarves', url: '/men/scarves' },
      { title: 'Accessories', url: '/men/accessories' },
      { title: 'Shoes', url: '/men/shoes' },
      { title: 'Fragnance', url: '/men/fragnance' },
      { title: 'Gifts', url: '/men/gifts' },
      { title: 'Runway', url: '/men/runway' },
    ],
  },
  {
    title: 'Women',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/d68dce82ea0a299febf5a35de882c78f0d70ad7d.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New Arrivals', url: '/men/new-arrivals' },
      { title: 'Clothing', url: '/men/clothing' },
      { title: 'Scarves', url: '/men/scarves' },
      { title: 'Accessories', url: '/men/accessories' },
      { title: 'Shoes', url: '/men/shoes' },
      { title: 'Fragnance', url: '/men/fragnance' },
      { title: 'Gifts', url: '/men/gifts' },
      { title: 'Runway', url: '/men/runway' },
    ],
  },
  {
    title: 'Children',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/d68dce82ea0a299febf5a35de882c78f0d70ad7d.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New Arrivals', url: '/men/new-arrivals' },
      { title: 'Clothing', url: '/men/clothing' },
      { title: 'Scarves', url: '/men/scarves' },
      { title: 'Accessories', url: '/men/accessories' },
      { title: 'Shoes', url: '/men/shoes' },
      { title: 'Fragnance', url: '/men/fragnance' },
      { title: 'Gifts', url: '/men/gifts' },
      { title: 'Runway', url: '/men/runway' },
    ],
  },
  {
    title: 'Beauty',
    image:
      'https://assets.burberry.com/is/image/Burberryltd/d68dce82ea0a299febf5a35de882c78f0d70ad7d.jpg?$BBY_V2_BASIC$',
    links: [
      { title: 'New Arrivals', url: '/men/new-arrivals' },
      { title: 'Clothing', url: '/men/clothing' },
      { title: 'Scarves', url: '/men/scarves' },
      { title: 'Accessories', url: '/men/accessories' },
      { title: 'Shoes', url: '/men/shoes' },
      { title: 'Fragnance', url: '/men/fragnance' },
      { title: 'Gifts', url: '/men/gifts' },
      { title: 'Runway', url: '/men/runway' },
    ],
  },
];

const SelectorButtons = styled.div`margin-top: 2.25rem`;

class SideNav extends Component {
  static propTypes = {
    isSideNavOpened: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  state = {
    subNavActiveSectionIndex: undefined,
  };

  setSubNavActiveSectionIndex = subNavActiveSectionIndex =>
    this.setState({ subNavActiveSectionIndex });

  handleClickOutside() {
    if (this.props.isSideNavOpened) {
      this.props.onToggle(false);
    }
  }

  render() {
    return (
      <SideNavWrapper>
        <MainNavigation isShiftedLeft={this.state.subNavActiveSectionIndex !== undefined}>
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs">
                <Logo />
              </div>
            </div>
          </div>
          <SectionButtons>
            {subNavigation.map((section, index) => (
              <SectionButton
                key={section.title}
                onClick={() => {
                  this.setSubNavActiveSectionIndex(index);
                }}
              >
                {section.title}
              </SectionButton>
            ))}
          </SectionButtons>
          <Header>CUSTOMER SERVICE</Header>
          <nav>
            <Link to="">Contact Us</Link>
            <Link to="">Payment</Link>
            <Link to="">Shipping</Link>
            <Link to="">Returns</Link>
            <Link to="">Faqs</Link>
            <Link to="">The Burberry App</Link>
            <Link to="">Store Locator</Link>
          </nav>
          <Header>OUR COMPANY</Header>
          <nav>
            <Link to="">Our History</Link>
            <Link to="">Burberry Group Pic</Link>
            <Link to="">Careers</Link>
            <Link to="">Corporate Responsibility</Link>
            <Link to="">Site Map</Link>
          </nav>
          <SelectorButtons>
            <SelectorButton options={['United Kingdom (£)', 'Russian Federation (₽)']} />
            <SelectorButton options={['English', 'Russian']} />
          </SelectorButtons>
        </MainNavigation>
        {this.state.subNavActiveSectionIndex !== undefined && (
          <SubNavigation
            navigation={subNavigation[this.state.subNavActiveSectionIndex]}
            onClose={() => this.setSubNavActiveSectionIndex(undefined)}
          />
        )}
      </SideNavWrapper>
    );
  }
}

export default enhanceWithClickOutside(SideNav);
