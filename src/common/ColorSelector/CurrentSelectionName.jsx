import React from "react";
import styled from "styled-components";

const CurrentSelectionName = styled.p`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
`;

export default props => {
  return (
    <CurrentSelectionName>
      Colour: {props.color}
    </CurrentSelectionName>
  );
};
