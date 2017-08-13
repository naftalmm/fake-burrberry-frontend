import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
    <Header>
      <Logo />
    </Header>
  );
};
