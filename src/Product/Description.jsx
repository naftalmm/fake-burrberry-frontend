import React from "react";
import styled from "styled-components";

const Description = props => {
  return (
    <div className={props.className}>
      <p>A refined car coat crafted in protective cotton gabardine.</p>
      <p>
        Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven
        and breathable fabric that protects against wind and rain.
      </p>
      <p>
        Raglan sleeves and a concealed button closure complement the clean
        tailored lines.
      </p>
      <p>The piece is finished with a distinctive check undercollar.</p>
      <br />
      <ul>
        <li>
          Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions
          change slightly according to size.
        </li>
        <li>Outer: 100% cotton</li>
        <li>Check lining: 100% cotton</li>
        <li>Sleeve lining: 100% viscose</li>
        <li>Buttons: buffalo horn</li>
        <li>Specialist dry clean</li>
        <li>Made in Europe</li>
        <li>Item 39428531</li>
      </ul>
    </div>
  );
};

export default styled(Description)`
  margin-top: 0;
  margin-bottom: 2rem;
  font-family: Lora;
  font-size: .875rem;
  line-height: 1.5rem;
  color: #171717;

  & p,
  ul,
  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  @media only screen and (min-width: 48rem) {
    margin-bottom: 3rem;
  }
`;
