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

const Photo = ({ srcSet, src, alt }) => (
  <picture>
    <source media="(min-width: 48rem)" srcSet={srcSet} />
    <Image src={src} alt={alt} />
  </picture>
);

Photo.propTypes = {
  srcSet: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Photo;
