import React from "react";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import CurrentSelectionName from "./CurrentSelectionName";

export default () => {
  const ColorPallete = styled.div`
    display: flex;
    padding-top: 1rem;
    padding-bottom: 2rem;
  `;

  const ColorSelector = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    @media only screen and (min-width: 48rem) {
      margin-right: -.5rem;
    }
  `;
  return (
    <ColorSelector>
      <CurrentSelectionName color="Honey" />
      <ColorPallete>
        <ColorButton color="black" isActive={false} />
        <ColorButton color="honey" isActive={true} />
      </ColorPallete>
      <hr />
    </ColorSelector>
  );
};
