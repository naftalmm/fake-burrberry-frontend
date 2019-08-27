import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import TextButton from '../../common/Buttons/TextButton';
import arrow from '../../assets/arrow.svg';

const ToolbarButton = styled(TextButton)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  ${(props) => !props.isActive && css`opacity: 0.5;`};

  &:after {
    display: inline-block;
    margin-left: 0.5rem;
    transform: ${(props) => (props.isOpened ? 'rotate(180deg)' : 'none')};
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
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
  }

  handleClick = () => {
    const { onToggle } = this.props;
    const { isOpened } = this.state;
    this.setState(
      (prevState) => ({
        isOpened: !prevState.isOpened,
      }),
      () => onToggle(isOpened),
    );
  };

  handleClickOutside() {
    const { onToggle } = this.props;
    onToggle(false);
    this.setState({ isOpened: false });
  }

  render() {
    const { isActive, title, children } = this.props;
    const { isOpened } = this.state;
    return (
      <ToolbarButtonWrapper>
        <ToolbarButton
          isActive={isActive}
          isOpened={isOpened}
          onClick={this.handleClick}
        >
          {title}
        </ToolbarButton>
        {isOpened && children}
      </ToolbarButtonWrapper>
    );
  }
}

DropdownButton.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default enhanceWithClickOutside(DropdownButton);
