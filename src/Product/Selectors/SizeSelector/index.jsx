import React, { Component } from 'react';
import styled from 'styled-components';
import SizeButton from './SizeButton';
import SizeHelpButton from '../../Show/SizeHelpButton';
import CurrentSelectionName from '../CurrentSelectionName';

const SizeSelectorWrapper = styled.div`
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

const sizes = ['S', 'M', 'L', 'XL'];

class SizeSelector extends Component {
  state = { selectedSizeIndex: 0 };

  setSelectedSizeIndex = selectedSizeIndex => this.setState({ selectedSizeIndex });

  render() {
    const { selectedSizeIndex } = this.state;
    return (
      <SizeSelectorWrapper>
        <Wrapper>
          <CurrentSelectionName label="Size" value={sizes[selectedSizeIndex]} />
          <SizeHelpButton />
        </Wrapper>
        <SizePallete>
          {sizes.map((size, index) => (
            <SizeButton
              key={size}
              isSelected={index === selectedSizeIndex}
              onClick={() => this.setSelectedSizeIndex(index)}
            >
              {size}
            </SizeButton>
          ))}
        </SizePallete>
      </SizeSelectorWrapper>
    );
  }
}

export default SizeSelector;
