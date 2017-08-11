import React from "react";
import styled from "styled-components";

const SizeHelpButton = styled.button`
  padding: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  text-align: left;
  color: #171717;

  background-color: transparent;
  border: none;
`;

export default () => {
  return <SizeHelpButton type="button">NEED SIZE HELP?</SizeHelpButton>;
};
