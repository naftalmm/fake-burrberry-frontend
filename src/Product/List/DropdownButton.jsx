import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import TextButton from '../../common/Buttons/TextButton';
import arrow from './../../assets/arrow.svg';

const ToolbarButton = styled(TextButton)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  ${props => !props.isActive && css`opacity: 0.5;`};

  &:after {
    display: inline-block;
    margin-left: 0.5rem;
    transform: ${props => (props.isOpened ? 'rotate(180deg)' : 'none')};
    content: url(${arrow});
  }
`;

const ToolbarButtonWrapper = styled.div`
  position: relative;
  margin-right: 1rem;

  @media only screen and (min-width: 48rem) {
    margin-right: 3rem;
  }

  &:last-child {
    margin-right: 0;
  }
`;

class DropdownButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
  };

  state = {
    isOpened: false,
  };

  handleClick = () => {
    this.setState(
      prevState => ({
        isOpened: !prevState.isOpened,
      }),
      () => this.props.onToggle(this.state.isOpened),
    );
  };

  handleClickOutside() {
    this.props.onToggle(false);
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <ToolbarButtonWrapper>
        <ToolbarButton
          isActive={this.props.isActive}
          isOpened={this.state.isOpened}
          onClick={this.handleClick}
        >
          {this.props.title}
        </ToolbarButton>
        {this.state.isOpened && this.props.children}
      </ToolbarButtonWrapper>
    );
  }
}

export default enhanceWithClickOutside(DropdownButton);
