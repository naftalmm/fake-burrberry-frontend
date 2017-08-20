import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';

const RecommendedMore = styled.section`margin-bottom: 3rem;`;

const Link = styled(RouterLink)`
  display: block;
  margin-bottom: 1rem;

  font-family: Lora;
  font-size: .875rem;
  font-style: italic;
  line-height: 17px;
  color: #171717;
  text-decoration: none;
`;

export default () =>
  (<RecommendedMore>
    <div className="container">
      <div className="row">
        <div className="col-xs">
          <SectionHeader>MORE FOR YOU</SectionHeader>
          <Link to="">Men’s Black Trench Coats</Link>
          <Link to="">Men’s Short Trench Coats</Link>
          <Link to="">Men’s Long Trench Coats</Link>
        </div>
      </div>
    </div>
  </RecommendedMore>);
