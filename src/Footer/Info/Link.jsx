import React, { Component } from "react";
import styled from "styled-components";

class Link extends Component {
  render() {
    const Link = styled.a`
      display: block;
      margin-bottom: .75rem;

      font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: .75rem;
      font-weight: 600;
      line-height: 1rem;
      color: #999;
    `;
    return (
      <Link hfer={this.props.href}>
        {this.props.children}
      </Link>
    );
  }
}

export default Link;
