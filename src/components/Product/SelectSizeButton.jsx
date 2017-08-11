import React from "react";
import styled from "styled-components";
export default () => {
  const SelectSizeButton = styled.button`
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: .75rem;
    line-height: .875rem;
    text-align: center;
    color: #fff;

    border-radius: 2px;
    background-color: #171717;
    border: solid 1px #171717;
  `;

  return <SelectSizeButton type="button">SELECT A SIZE</SelectSizeButton>;
};
