import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

export default () => {
  const Header = styled.header`
    display: flex;
    justify-content: center;
  `;
  return (
    <Header>
      <Logo />
    </Header>
  );
};
