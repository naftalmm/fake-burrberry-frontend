import React from "react";
import styled from "styled-components";
import logo from "./../../logo.svg";

export default () => {
  const Image = styled.img`
    width: 138px;
    height: 10px;
    padding-top: 1rem;
    padding-bottom: 1rem;

    vertical-align: middle;

    @media only screen and (min-width: 48rem) {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
  `;

  return (
    <a href="/">
      <Image src={logo} alt="Burberry Logo" />
    </a>
  );
};
