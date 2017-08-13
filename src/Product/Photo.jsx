import React from "react";
import styled from "styled-components";

const Image = styled.img`
  min-width: 300px;
  width: 100%;
  max-width: 100%;
  height: auto;

  vertical-align: middle;
  object-fit: contain;
`;

export default (props) => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={props.srcSet} />
      <Image src={props.src} alt={props.alt} />
    </picture>
  );
};
