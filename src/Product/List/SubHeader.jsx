import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;

  font-family: Lora;
  font-size: 1.625rem;
  font-weight: 500;
  line-height: 2rem;
  color: #171717;
`;

const SubHeader = props => (
  <section className={props.className}>
    <div className="container">
      <div className="row">
        <div className="col-xs-11 col-md-9 col-lg-7">
          <Helmet>
            <title>
              {props.title}
            </title>
          </Helmet>
          <Title>
            {props.title}
          </Title>
          {props.text}
        </div>
      </div>
      <Toolbar handleDropdownButtonToggle={props.handleDropdownButtonToggle} />
    </div>
  </section>
);

SubHeader.defaultProps = {
  className: '',
};

SubHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.element.isRequired,
  handleDropdownButtonToggle: PropTypes.func.isRequired,
};

export default styled(SubHeader)`
  padding-top: 2rem;

  background-color: #f3f3f3;
  
  @media only screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;
