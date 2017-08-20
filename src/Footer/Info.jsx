import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Lg } from './../common/Responsive';

const Header = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: bold;
  color: #171717;

  @media only screen and (min-width: 62rem) {
    margin-top: 2rem;
  }
`;

const Link = styled(RouterLink)`
  display: block;
  margin-bottom: .75rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #999;
  text-decoration: none;  
`;

const StorePhoto = styled.img`
  width: 232px;
  height: 154px;
  margin-top: 2rem;
  vertical-align: middle;
`;

const FindStoreLink = styled(RouterLink)`
  display: inline-block;
  margin-top: 1rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #171717;
  text-decoration: none;

  border-bottom: solid 1px #171717;
`;

export default () =>
  (<nav className="container">
    <div className="row">
      <div className="col-md-3">
        <Header>CUSTOMER SERVICE</Header>
        <Link to="">Contact Us</Link>
        <Link to="">Payment</Link>
        <Link to="">Shipping</Link>
        <Link to="">Returns</Link>
        <Link to="">Faqs</Link>
        <Link to="">Live Chat</Link>
        <Link to="">The Burberry App</Link>
        <Link to="">Store Locator</Link>
      </div>
      <div className="col-md-3">
        <Header>OUR COMPANY</Header>
        <Link to="">Our History</Link>
        <Link to="">Burberry Group Plc</Link>
        <Link to="">Careers</Link>
        <Link to="">Corporate Responsibility</Link>
        <Link to="">Site Map</Link>
      </div>
      <div className="col-md-3">
        <Header>LEGAL &amp; COOKIES</Header>
        <Link to="">Terms &amp; Conditions</Link>
        <Link to="">Privacy Policy</Link>
        <Link to="">Cookie Policy</Link>
        <Link to="">Accessibility Statement</Link>
        <Link to="">Japan Only - SCTL indications</Link>
      </div>
      <Lg>
        <div className="col-lg-3">
          <StorePhoto src={`${process.env.PUBLIC_URL}/img/store.jpg`} alt="Store interior" />
          <FindStoreLink to="">Find a store</FindStoreLink>
        </div>
      </Lg>
    </div>
  </nav>);
