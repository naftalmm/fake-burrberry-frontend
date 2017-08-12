import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
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
      <PrimaryButton children="SELECT A SIZE" type="button"/>
      <SecondaryButton children="FIND IN STORE" type="button"/>
      <SizeHelpButton />
    </Actions>
  );
};
