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

const SelectedLocale = styled.span`
  margin-right: 1.5rem;
  color: #171717;

  @media only screen and (min-width: 62rem) {
    margin-right: 3rem;
  }
`;

const languages = ['English', 'Russian'];

class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedLanguageIndex: 0 };
  }

  setSelectedLanguageIndex = (selectedLanguageIndex) => this.setState({ selectedLanguageIndex });

  render() {
    const { selectedLanguageIndex } = this.state;
    return (
      <SelectorWrapper>
        <SelectButton>
          Language:&nbsp;
          <SelectedLocale>{languages[selectedLanguageIndex]}</SelectedLocale>
        </SelectButton>
        <Select onChange={(event) => this.setSelectedLanguageIndex(event.target.selectedIndex)}>
          {languages.map((language) => (
            <option key={language}>
              Language:
              {language}
            </option>
          ))}
        </Select>
      </SelectorWrapper>
    );
  }
}

export default LanguageSelector;
