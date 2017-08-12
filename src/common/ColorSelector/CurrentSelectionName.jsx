import React from "react";
import styled from "styled-components";

const CurrentSelectionName = styled.p`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
`;

const ColorName = styled.span`font-weight: bold;`;

export default props => {
  return (
    <CurrentSelectionName>
      Colour: <ColorName>{props.color}</ColorName>
    </CurrentSelectionName>
  );
};
