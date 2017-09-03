import React, { Component } from 'react';
import styled from 'styled-components';

const SelectorWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const SelectButton = styled.button`
  position: absolute;
  padding: 0;
  align-self: left;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #999;

  border-style: none;
  background-color: transparent;
  cursor: pointer;
`;

const Select = styled.select`
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  opacity: 0;
  cursor: pointer;
`;

const SelectedValue = styled.span`
  margin-right: 1.5rem;
  color: #171717;

  @media only screen and (min-width: 62rem) {
    margin-right: 3rem;
  }
`;

const locations = ['United Kingdom', 'Russian Federation'];

class ShippingLocationSelector extends Component {
  state = { selectedLocationIndex: 0 };

  setSelectedLocationIndex = selectedLocationIndex => this.setState({ selectedLocationIndex });

  render() {
    return (
      <SelectorWrapper>
        <SelectButton>
          Shipping country:&nbsp;
          <SelectedValue>{locations[this.state.selectedLocationIndex]}</SelectedValue>
        </SelectButton>
        <Select onChange={event => this.setSelectedLocationIndex(event.target.selectedIndex)}>
          {locations.map(location => <option key={location}>Shipping country: {location}</option>)}
        </Select>
      </SelectorWrapper>
    );
  }
}

export default ShippingLocationSelector;
