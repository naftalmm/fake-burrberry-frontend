import React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: block;
  margin-bottom: .75rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  color: #999;
`;

export default props => {
  return (
    <Link hfer={props.href}>
      {props.children}
    </Link>
  );
};
