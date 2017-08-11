import React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;

  font-family: Lora;
  font-size: .875rem;
  font-style: italic;
  line-height: 17px;
  color: #171717;
`;

export default props => {
  return (
    <Link href={props.href}>
      {props.children}
    </Link>
  );
};
