import React, { Component } from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';
import CurrentSelectionName from '../CurrentSelectionName';

const ColorPalette = styled.div`
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

const ColorSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const colors = [
  { colorName: 'Honey', colorHex: '#cfa880' },
  { colorName: 'Black', colorHex: '#232122' },
];

class ColorSelector extends Component {
  state = { selectedColorIndex: 0 };

  setSelectedColorIndex = selectedColorIndex => this.setState({ selectedColorIndex });

  render() {
    const { selectedColorIndex } = this.state;

    return (
      <ColorSelectorWrapper>
        <CurrentSelectionName
          label="Colour"
          value={colors[selectedColorIndex].colorName}
        />
        <ColorPalette>
          {colors.map((color, index) => (
            <ColorButton
              colorName={color.colorName}
              colorHex={color.colorHex}
              isActive={selectedColorIndex === index}
              key={color.colorName}
              onClick={() => this.setSelectedColorIndex(index)}
            />
          ))}
        </ColorPalette>
      </ColorSelectorWrapper>
    );
  }
}

export default ColorSelector;
