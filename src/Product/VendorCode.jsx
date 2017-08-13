import React from "react";
import styled from "styled-components";

const VendorCode = styled.p`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
`;

export default props => {
  return (
    <VendorCode>
      Item {props.value}
    </VendorCode>
  );
};
