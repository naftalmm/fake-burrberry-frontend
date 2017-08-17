import React from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';

const FindButton = styled(SecondaryButton)`
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export default () => <FindButton type="button">FIND IN STORE</FindButton>;
