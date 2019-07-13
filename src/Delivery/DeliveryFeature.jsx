import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Name = styled.h3`
  margin-top: 0;
  margin-bottom: 0.25rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: bold;
  text-align: left;
  color: #171717;
`;

const Description = styled.p`
  margin-top: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  text-align: left;
  color: #171717;
`;

const DeliveryFeatureWrapper = styled.div`margin-bottom: 1.5rem;`;

const DeliveryFeature = ({ name, description }) => (
  <DeliveryFeatureWrapper>
    <Name>
      {name}
    </Name>
    <Description>
      {description}
    </Description>
  </DeliveryFeatureWrapper>
);

DeliveryFeature.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DeliveryFeature;
