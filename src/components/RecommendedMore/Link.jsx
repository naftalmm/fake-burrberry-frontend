import React, { Component } from "react";
import styled from "styled-components";

class Link extends Component {
  render() {
    const Link = styled.a`
      display: block;
      margin-bottom: 1rem;

      font-family: Lora;
      font-size: .875rem;
      font-style: italic;
      line-height: 17px;
      color: #171717;
    `;
    return (
      <Link href={this.props.href}>
        {this.props.children}
      </Link>
    );
  }
}

export default Link;
