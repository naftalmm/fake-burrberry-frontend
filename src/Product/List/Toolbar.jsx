import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DropdownButton from './DropdownButton';

const Content = styled.p`
  margin: 0;
  white-space: nowrap;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const LeftContentWrapper = styled.div`
  position: absolute;
  left: -.5rem;
  @media only screen and (min-width: 48rem) {
    left: -1.5rem;
  }
  z-index: 1;
  padding: 1rem 1.5rem 1.5rem;
  background: #f3f3f3;
`;

const RightContentWrapper = styled.div`
  position: absolute;
  right: -.5rem;
  @media only screen and (min-width: 48rem) {
    right: -1.5rem;
  }
  z-index: 1;
  padding: 1rem 1.5rem 1.5rem;
  background: #f3f3f3;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
`;

const SelectButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1rem;
`;

const filterButtons = [
  {
    title: 'Category',
    content: (
      <Content>
        Content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content
      </Content>
    ),
  },
  {
    title: 'Colour',
    content: (
      <Content>
        Content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content
      </Content>
    ),
  },
  {
    title: 'Size',
    content: (
      <Content>
        Content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content
      </Content>
    ),
  },
];

const sortButtons = [
  {
    title: 'Sort by price',
    content: (
      <Content>
        high or <br />
        low <br />
        it’s medium length of <br />
        content <br />
      </Content>
    ),
  },
];

class Toolbar extends Component {
  state = {
    activeDropdown: undefined,
  };

  handleDropdownButtonToggle = (dropdownName, isToggledOn) => {
    const activeDropdown = isToggledOn ? dropdownName : undefined;
    this.setState({ activeDropdown });
    this.props.handleDropdownButtonToggle(isToggledOn);
  };

  render() {
    return (
      <ToolbarWrapper>
        <SelectButtonsWrapper>
          {filterButtons.map(filterButton => (
            <DropdownButton
              key={filterButton.title}
              title={filterButton.title}
              isActive={
                !this.state.activeDropdown || this.state.activeDropdown === filterButton.title
              }
              onToggle={isToggledOn =>
                this.handleDropdownButtonToggle(filterButton.title, isToggledOn)}
            >
              <LeftContentWrapper>{filterButton.content}</LeftContentWrapper>
            </DropdownButton>
          ))}
        </SelectButtonsWrapper>
        <div>
          {sortButtons.map(sortButton => (
            <DropdownButton
              key={sortButton.title}
              title={sortButton.title}
              isActive={
                !this.state.activeDropdown || this.state.activeDropdown === sortButton.title
              }
              onToggle={isToggledOn =>
                this.handleDropdownButtonToggle(sortButton.title, isToggledOn)}
            >
              <RightContentWrapper>{sortButton.content}</RightContentWrapper>
            </DropdownButton>
          ))}
        </div>
      </ToolbarWrapper>
    );
  }
}

Toolbar.propTypes = {
  handleDropdownButtonToggle: PropTypes.func.isRequired,
};

export default Toolbar;
