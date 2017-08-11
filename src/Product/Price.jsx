import React from "react";
import styled from "styled-components";

const Price = styled.h2`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #111;
`;

export default props => {
  return (
    <Price>
      {props.value} {props.currency}
    </Price>
  );
};
