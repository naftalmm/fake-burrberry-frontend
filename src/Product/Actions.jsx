import React from "react";
import styled from "styled-components";
import SelectSizeButton from "./SelectSizeButton";
import FindButton from "./FindButton";
import SizeHelpButton from "./SizeHelpButton";

export default () => {
  const Actions = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 3rem;

    @media only screen and (min-width: 48rem) {
      margin-right: -.5rem;
    }
  `;

  return (
    <Actions>
      <SelectSizeButton />
      <FindButton />
      <SizeHelpButton />
    </Actions>
  );
};
