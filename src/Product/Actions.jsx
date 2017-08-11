import React from "react";
import styled from "styled-components";
import SelectSizeButton from "./SelectSizeButton";
import FindButton from "./FindButton";
import SizeHelpButton from "./SizeHelpButton";

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media only screen and (min-width: 48rem) {
    margin-right: -.5rem;
  }
`;

export default () => {
  return (
    <Actions>
      <SelectSizeButton />
      <FindButton />
      <SizeHelpButton />
    </Actions>
  );
};
