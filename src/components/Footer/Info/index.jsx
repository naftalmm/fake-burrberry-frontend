import React from "react";
import styled from "styled-components";
import Link from "./Link";

export default () => {
  const Info = styled.div`
    @media only screen and (max-width: 48rem) {
      display: none;
    }

    .footer-info-container {
      margin-left: -.5rem;
    }
  `;
  const Header = styled.h4`
    margin-top: 0;
    margin-bottom: 1rem;

    font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: .75rem;
    font-weight: bold;
    color: #171717;
  `;

  return (
    <Info>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Header>CUSTOMER SERVICE</Header>
            <Link children="Contact Us" />
            <Link children="Payment" />
            <Link children="Shipping" />
            <Link children="Returns" />
            <Link children="Faqs" />
            <Link children="Live Chat" />
            <Link children="The Burberry App" />
            <Link children="Store Locator" />
          </div>
          <div className="col-md-3">
            <Header>OUR COMPANY</Header>
            <Link children="Our History" />
            <Link children="Burberry Group Plc" />
            <Link children="Careers" />
            <Link children="Corporate Responsibility" />
            <Link children="Site Map" />
          </div>
          <div className="col-md-3">
            <Header>LEGAL &amp; COOKIES</Header>
            <Link children="Terms &amp; Conditions" />
            <Link children="Privacy Policy" />
            <Link children="Cookie Policy" />
            <Link children="Accessibility Statement" />
            <Link children="Japan Only - SCTL indications" />
          </div>
        </div>
      </div>
    </Info>
  );
};
