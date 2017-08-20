import React from 'react';
import styled from 'styled-components';
import { XsMd, Lg } from '../../common/Responsive';
import ColorSelector from '../Selectors/ColorSelector/';
import SizeSelector from '../Selectors/SizeSelector/';
import PrimaryButton from '../../common/Buttons/PrimaryButton';
import FindButton from './FindButton';
import SizeHelpButton from './SizeHelpButton';

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 0;
  }
`;

export default () =>
  (<Actions>
    <div className="box">
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <ColorSelector />
        </div>
        <Lg>
          <div className="col-lg-6">
            <SizeSelector />
          </div>
        </Lg>
      </div>
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <XsMd>
            <PrimaryButton type="button">SELECT A SIZE</PrimaryButton>
          </XsMd>
          <Lg>
            <PrimaryButton type="button">ADD TO BAG</PrimaryButton>
          </Lg>
        </div>
        <div className="col-xs-12 col-lg-6">
          <FindButton />
        </div>
        <XsMd>
          <div className="col-xs-12">
            <SizeHelpButton />
          </div>
        </XsMd>
      </div>
    </div>
  </Actions>);
