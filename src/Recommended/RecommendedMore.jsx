import React from "react";
import styled from "styled-components";
import SectionHeader from "../common/SectionHeader";

const RecommendedMore = styled.section`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
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
      <div className="container">
        <div className="row">
          <div className="col-xs">
            <SectionHeader>MORE FOR YOU</SectionHeader>
            <Link>Men’s Black Trench Coats</Link>
            <Link>Men’s Short Trench Coats</Link>
            <Link>Men’s Long Trench Coats</Link>
          </div>
        </div>
      </div>
    </RecommendedMore>
  );
};
