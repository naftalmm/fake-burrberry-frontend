import React from "react";
import styled from "styled-components";

const FindButton = styled.button`
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: .875rem;
  text-align: center;
  color: #171717;

  border-radius: 2px;
  background-color: transparent;
  border: solid 1px #999;
`;

export default () => {
  return <FindButton type="button">FIND IN STORE</FindButton>;
};
