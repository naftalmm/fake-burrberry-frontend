import React, { Component } from 'react';
import styled from 'styled-components';
import TextButton from '../common/Buttons/TextButton';
import arrow from '../assets/arrow.svg';

const ShopLocationSelectorWrapper = styled.div`position: relative;`;

const SelectButton = styled(TextButton)`
  position: absolute;
  top: 1.5rem;
  left: 0;
  color: #999;

  @media screen and (min-width: 62rem) {
    top: 2rem;
  }

  &:after {
    margin-left: 0.5rem;
    content: url(${arrow});
  }
`;

const Select = styled.select`
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  opacity: 0;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
    padding-top: 0.5rem;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 1.75rem;
  }
`;

const locations = ['United Kingdom (£)', 'Russian Federation (₽)'];

class ShopLocationSelector extends Component {
  state = { selectedLocationIndex: 0 };

  setSelectedLocationIndex = selectedLocationIndex => this.setState({ selectedLocationIndex });

  render() {
    return (
      <ShopLocationSelectorWrapper>
        <SelectButton>Shopping in: {locations[this.state.selectedLocationIndex]}</SelectButton>
        <Select onChange={event => this.setSelectedLocationIndex(event.target.selectedIndex)}>
          {locations.map(location => <option key={location}>Shopping in: {location}</option>)}
        </Select>
      </ShopLocationSelectorWrapper>
    );
  }
}

export default ShopLocationSelector;
