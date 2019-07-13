/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  margin-bottom: 2rem;

  font-family: Lora;
  font-size: .875rem;
  font-style: italic;
  line-height: 1.0625rem;
  text-align: left;
  color: #171717;
  text-decoration: none;
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

export default () => (
  <Help>
    <Header>Need help?</Header>
    <Link to="">Find out more and contact us</Link>
  </Help>
);
