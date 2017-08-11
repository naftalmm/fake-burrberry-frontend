import React from "react";
import styled from "styled-components";

export default () => {
  const Link = styled.a`
    margin-bottom: 2rem;

    font-family: Lora;
    font-size: .875rem;
    font-style: italic;
    line-height: 1.0625rem;
    text-align: left;
    color: #171717;
  `;

  const Header = styled.h4`
    margin-top: .5rem;
    margin-bottom: 1rem;

    font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.1875rem;
    text-align: left;
    color: #171717;
  `;

  const Help = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 48rem) {
      display: none;
    }
  `;

  return (
    <Help>
      <Header>Need help?</Header>
      <Link>Find out more and contact us</Link>
    </Help>
  );
};
