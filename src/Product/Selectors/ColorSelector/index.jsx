import React from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';
import CurrentSelectionName from './../CurrentSelectionName';

const ColorPallete = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  border-bottom: solid 1px #c6c6c6;

  @media only screen and (min-width: 62rem) {
    padding-bottom: 1.5rem;
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const ColorSelector = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export default () =>
  (<ColorSelector>
    <CurrentSelectionName label="Colour" value="Honey" />
    <ColorPallete>
      <ColorButton colorName="black" colorHex="#232122" isActive={false} />
      <ColorButton colorName="honey" colorHex="#cfa880" isActive />
    </ColorPallete>
  </ColorSelector>);
