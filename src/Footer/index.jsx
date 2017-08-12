import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Help from "./Help";

const Footer = styled.footer`
  padding-top: 2rem;

  background-color: #f3f3f3;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    margin-top: 1.25rem;
    margin-left: .5rem;
    padding-bottom: 1rem;
  }
`;

const Button = styled.button`
  padding: 0;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  align-self: left;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #999;

  border-style: none;
  background-color: transparent;
`;

export default () => {
  return (
    <Footer>
      <Info />
      <ButtonsWrapper>
        <Button children="Shipping country: Russian Federation" type="button" />
        <Button children="Language: English" type="button" />
      </ButtonsWrapper>
      <Help />
    </Footer>
  );
};
