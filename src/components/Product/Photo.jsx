import React, { Component } from "react";
import styled from "styled-components";

class Photo extends Component {
  render() {
    const Image = styled.img`
      min-width: 300px;
      width: 100%;
      max-width: 100%;
      height: auto;

      vertical-align: middle;
      object-fit: contain;
    `;
    return (
      <picture>
        <source media="(min-width: 768px)" srcSet={this.props.srcSet} />
        <Image
          src={this.props.src}
          alt={this.props.alt}
        />
      </picture>
    );
  }
}

export default Photo;
