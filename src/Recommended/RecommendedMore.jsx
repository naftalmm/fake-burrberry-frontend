import React from "react";
import styled from "styled-components";
import SectionHeader from "../common/SectionHeader";

const RecommendedMore = styled.section`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const LinksWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;

  font-family: Lora;
  font-size: .875rem;
  font-style: italic;
  line-height: 17px;
  color: #171717;
`;

export default () => {
  return (
    <RecommendedMore>
      <SectionHeader>MORE FOR YOU</SectionHeader>
      <LinksWrapper>
        <Link children="Men’s Black Trench Coats" />
        <Link children="Men’s Short Trench Coats" />
        <Link children="Men’s Long Trench Coats" />
      </LinksWrapper>
    </RecommendedMore>
  );
};
