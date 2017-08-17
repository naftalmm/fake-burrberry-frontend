import styled from 'styled-components';

export default styled.h1`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;

  font-family: Lora;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-align: left;
  color: #111111;

  @media only screen and (min-width: 48rem) {
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  @media only screen and (min-width: 62rem) {
    padding-top: 0;
    padding-bottom: .5rem;
  }
`;
