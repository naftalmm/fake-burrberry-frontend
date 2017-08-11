import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 1rem;

  border-radius: 50%;
  border: solid 1px ${props => (props.isActive ? "#232122" : "transparent")};
  background-color: ${props =>
    props.color === "black" ? "#232122" : "#cfa880"};
`;

export default props => {
  return (
    <Button type="button" isActive={props.isActive} color={props.color}>
      <span hidden>
        Change colour to ${props.color}
      </span>
    </Button>
  );
};
