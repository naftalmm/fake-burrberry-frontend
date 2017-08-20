import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { Xs, MdLg } from './../common/Responsive';
import Hamburger from './Hamburger';
import TextButton from '../common/Buttons/TextButton';
import TabGroup from './../common/TabGroup/';
import arrow from './../assets/arrow.svg';

const SelectButton = styled(TextButton)`
  color: #999;

  &:after {
    margin-left: .5rem;
    content: url(${arrow});
  }
`;

export default () =>
  (<div className="container">
    <div className="row start-xs middle-xs">
      <div className="col-xs-1 col-md-4">
        <Xs>
          <Hamburger />
        </Xs>
        <MdLg>
          <SelectButton>Shopping in: United Kingdom (£)</SelectButton>
        </MdLg>
      </div>
      <div className="col-xs-10 col-md-4">
        <div className="box">
          <div className="row center-xs">
            <div className="col-xs-12">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row center-xs">
      <MdLg>
        <TabGroup />
      </MdLg>
    </div>
  </div>);
