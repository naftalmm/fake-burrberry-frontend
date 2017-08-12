import React from "react";
import styled from "styled-components";

const Header = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: bold;
  color: #171717;

  @media only screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

const Link = styled.a`
  display: block;
  margin-bottom: .75rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #999;
`;

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Header>CUSTOMER SERVICE</Header>
          <Link>Contact Us</Link>
          <Link>Payment</Link>
          <Link>Shipping</Link>
          <Link>Returns</Link>
          <Link>Faqs</Link>
          <Link>Live Chat</Link>
          <Link>The Burberry App</Link>
          <Link>Store Locator</Link>
        </div>
        <div className="col-md-3">
          <Header>OUR COMPANY</Header>
          <Link>Our History</Link>
          <Link>Burberry Group Plc</Link>
          <Link>Careers</Link>
          <Link>Corporate Responsibility</Link>
          <Link>Site Map</Link>
        </div>
        <div className="col-md-3">
          <Header>LEGAL &amp; COOKIES</Header>
          <Link>Terms &amp; Conditions</Link>
          <Link>Privacy Policy</Link>
          <Link>Cookie Policy</Link>
          <Link>Accessibility Statement</Link>
          <Link>Japan Only - SCTL indications</Link>
        </div>
      </div>
    </div>
  );
};
