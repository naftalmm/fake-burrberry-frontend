import React from 'react';
import styled from 'styled-components';
import { MdLg } from '../common/Responsive';
import Info from './Info';
import Help from './Help';
import ShippingLocationSelector from './ShippingLocationSelector';
import LanguageSelector from './LanguageSelector';

const Footer = styled.footer`
  padding-top: 2rem;

  background-color: #f3f3f3;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    margin-top: 1.25rem;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: 62rem) {
    margin-top: 2.25rem;
    padding-bottom: 2rem;
  }
`;

export default () => (
  <Footer>
    <MdLg>
      <Info />
    </MdLg>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <ButtonsWrapper>
            <ShippingLocationSelector />
            <LanguageSelector />
          </ButtonsWrapper>
        </div>
      </div>
    </div>
    <Help />
  </Footer>
);
