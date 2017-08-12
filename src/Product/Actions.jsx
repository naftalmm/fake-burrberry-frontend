import React from "react";
import Desktop from "./../common/Responsive/Desktop";
import TabletOrMobile from "./../common/Responsive/TabletOrMobile";
import styled from "styled-components";
import ColorSelector from "./Selectors/ColorSelector";
import SizeSelector from "./Selectors/SizeSelector";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import SizeHelpButton from "./SizeHelpButton";

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 0;
  }
`;

export default () => {
  return (
    <Actions>
      <div className="box">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <ColorSelector />
          </div>
          <Desktop>
            <div className="col-lg-6">
              <SizeSelector />
            </div>
          </Desktop>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <TabletOrMobile>
              <PrimaryButton type="button">SELECT A SIZE</PrimaryButton>
            </TabletOrMobile>
            <Desktop>
              <PrimaryButton type="button">ADD TO BAG</PrimaryButton>
            </Desktop>
          </div>
          <div className="col-xs-12 col-lg-6">
            <SecondaryButton type="button">FIND IN STORE</SecondaryButton>
          </div>
          <TabletOrMobile>
            <div className="col-xs-12">
              <SizeHelpButton />
            </div>
          </TabletOrMobile>
        </div>
      </div>
    </Actions>
  );
};
