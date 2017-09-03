import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heart from './../../assets/Heart';

class AddToFavouritesButton extends Component {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
  };

  state = { isToggleOn: false };

  toggle = () =>
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));

  render() {
    return (
      <button className={this.props.className} onClick={this.toggle}>
        <Heart fill={this.state.isToggleOn ? '#171717' : 'none'} />
      </button>
    );
  }
}

export default styled(AddToFavouritesButton)`
  margin-left: 1rem;
  padding: 0;
  flex-shrink: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
