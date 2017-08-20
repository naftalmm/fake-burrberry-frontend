import React from 'react';
import styled from 'styled-components';
import SizeButton from './SizeButton';
import SizeHelpButton from '../../Show/SizeHelpButton';
import CurrentSelectionName from './../CurrentSelectionName';

const SizeSelector = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const SizePallete = styled.div`
  display: flex;
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default () =>
  (<SizeSelector>
    <Wrapper>
      <CurrentSelectionName label="Size" value="XL" />
      <SizeHelpButton />
    </Wrapper>
    <SizePallete>
      <SizeButton>S</SizeButton>
      <SizeButton>M</SizeButton>
      <SizeButton>L</SizeButton>
      <SizeButton>XL</SizeButton>
    </SizePallete>
  </SizeSelector>);
