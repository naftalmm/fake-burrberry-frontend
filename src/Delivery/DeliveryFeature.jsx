import React from "react";
import styled from "styled-components";

const FeatureName = styled.h3`
  margin-bottom: 0.25rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: .875rem;
  font-weight: bold;
  text-align: left;
  color: #171717;
`;

const FeatureDescription = styled.p`
  margin-top: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  text-align: left;
  color: #171717;
`;

const DeliveryFeature = styled.div`margin-bottom: 1.5rem;`;

export default props => {
  return (
    <DeliveryFeature>
      <FeatureName>
        {props.name}
      </FeatureName>
      <FeatureDescription>
        {props.description}
      </FeatureDescription>
    </DeliveryFeature>
  );
};
