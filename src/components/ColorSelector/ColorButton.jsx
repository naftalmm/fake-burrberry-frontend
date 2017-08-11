import React, { Component } from "react";
import styled from "styled-components";

class ColorButton extends Component {
  render() {
    const Button = styled.button`
      width: 40px;
      height: 40px;
      margin-right: 1rem;

      border-radius: 50%;
      border: solid 1px ${props =>
          props.isActive ? "#232122" : "transparent"};
      background-color: ${props =>
        props.color === "black" ? "#232122" : "#cfa880"};
    `;

    return (
      <Button type="button" isActive={this.props.isActive} color = {this.props.color}>
        <span hidden>
          Change colour to ${this.props.color}
        </span>
      </Button>
    );
  }
}

export default ColorButton;
