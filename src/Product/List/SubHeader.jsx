import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Xs, MdLg } from './../../common/Responsive';
import TextButton from '../../common/Buttons/TextButton';
import arrow from './../../assets/arrow.svg';

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;

  font-family: Lora;
  font-size: 1.625rem;
  font-weight: 500;
  line-height: 2rem;
  color: #171717;
`;

const SortButton = styled(TextButton)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  &:after {
    margin-left: .5rem;
    content: url(${arrow});
  }
`;

const SelectButton = styled(SortButton)`
  margin-right: 1rem;

  @media only screen and (min-width: 48rem) {
    margin-right: 3rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
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
      <div className="row">
        <div className="col-xs">
          <Xs>
            <ButtonsWrapper>
              <SelectButton>Category</SelectButton>
              <SelectButton>Colour</SelectButton>
              <SelectButton>Size</SelectButton>
              <SortButton>Sort by price</SortButton>
            </ButtonsWrapper>
          </Xs>
          <MdLg>
            <div className="box">
              <div className="row between-xs">
                <div className="col-xs">
                  <SelectButton>Category</SelectButton>
                  <SelectButton>Colour</SelectButton>
                  <SelectButton>Size</SelectButton>
                </div>
                <div className="col-xs">
                  <div className="box">
                    <div className="row end-xs">
                      <div className="col-xs">
                        <SortButton>Sort by price</SortButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MdLg>
        </div>
      </div>
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
};

export default styled(SubHeader)`
  padding-top: 2rem;

  background-color: #f3f3f3;
  
  @media only screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;
