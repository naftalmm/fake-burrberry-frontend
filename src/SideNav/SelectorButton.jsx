import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SecondaryButton from '../common/Buttons/SecondaryButton';

const SelectorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: .5rem;
  margin-right: .5rem;
`;

const Select = styled.select`
  padding-bottom 2rem;
  margin-bottom: 1rem;
  
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  opacity: 0;
  cursor: pointer;
`;

const Button = styled(SecondaryButton)`
  padding: 1rem;
  position: absolute;
  width: 100%;
`;

class ButtonSelect extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = { selectedIndex: 0 };

  setSelectedIndex = selectedIndex => this.setState({ selectedIndex });

  render() {
    const { options } = this.props;
    const { selectedIndex } = this.state;
    return (
      <SelectorWrapper>
        <Button>{options[selectedIndex]}</Button>
        <Select onChange={event => this.setSelectedIndex(event.target.selectedIndex)}>
          {options.map(option => <option key={option}>{option}</option>)}
          .
        </Select>
      </SelectorWrapper>
    );
  }
}

export default ButtonSelect;
