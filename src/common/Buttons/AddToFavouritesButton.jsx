import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heart from '../../assets/Heart';

class AddToFavouritesButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
  }

  toggle = () => this.setState((prevState) => ({
    isToggleOn: !prevState.isToggleOn,
  }));

  render() {
    const { className } = this.props;
    const { isToggleOn } = this.state;
    return (
      <button className={className} onClick={this.toggle} type="submit">
        <Heart fill={isToggleOn ? '#171717' : 'none'} />
      </button>
    );
  }
}

AddToFavouritesButton.defaultProps = {
  className: '',
};

AddToFavouritesButton.propTypes = {
  className: PropTypes.string,
};

export default styled(AddToFavouritesButton)`
  margin-left: 1rem;
  padding: 0;
  flex-shrink: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
