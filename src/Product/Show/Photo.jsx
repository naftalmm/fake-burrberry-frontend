import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
  min-width: 300px;
  width: 100%;
  max-width: 100%;
  height: auto;

  vertical-align: middle;
  object-fit: contain;
`;

const Photo = props =>
  (<picture>
    <source media="(min-width: 48rem)" srcSet={props.srcSet} />
    <Image src={props.src} alt={props.alt} />
  </picture>);

Photo.propTypes = {
  srcSet: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Photo;
