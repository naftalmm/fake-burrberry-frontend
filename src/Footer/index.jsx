import React from "react";
import styled from "styled-components";
import Info from "./Info/index";
import Help from "./Help";
import Button from "./Button";

export default () => {
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
  return (
    <Footer>
      <Info />
      <ButtonsWrapper>
        <Button children="Shipping country: Russian Federation" />
        <Button children="Language: English" />
      </ButtonsWrapper>
      <Help />
    </Footer>
  );
};
