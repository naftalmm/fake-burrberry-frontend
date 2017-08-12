import React from "react";
import {XS_MD, LG} from "../common/Responsive";
import styled from "styled-components";
import ColorSelector from "./Selectors/ColorSelector";
import SizeSelector from "./Selectors/SizeSelector";
import PrimaryButton from "./PrimaryButton";
import FindButton from "./FindButton";
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
          <LG>
            <div className="col-lg-6">
              <SizeSelector />
            </div>
          </LG>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <XS_MD>
              <PrimaryButton type="button">SELECT A SIZE</PrimaryButton>
            </XS_MD>
            <LG>
              <PrimaryButton type="button">ADD TO BAG</PrimaryButton>
            </LG>
          </div>
          <div className="col-xs-12 col-lg-6">
            <FindButton />
          </div>
          <XS_MD>
            <div className="col-xs-12">
              <SizeHelpButton />
            </div>
          </XS_MD>
        </div>
      </div>
    </Actions>
  );
};
