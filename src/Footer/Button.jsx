import React, { Component } from "react";
import styled from "styled-components";

class Button extends Component {
  render() {
    const Button = styled.button`
      padding: 0;
      margin-right: 1.5rem;
      margin-bottom: 1rem;
      align-self: left;

      font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: .75rem;
      line-height: 1rem;
      color: #999;

      border-style: none;
      background-color: transparent;
    `;
    return (
      <Button type="button">
        {this.props.children}
      </Button>
    );
  }
}

export default Button;
