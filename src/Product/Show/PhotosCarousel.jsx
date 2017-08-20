import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';

const PhotosCarousel = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const { PUBLIC_URL } = process.env;
export default () =>
  (<PhotosCarousel>
    <Photo
      srcSet={`${PUBLIC_URL}/img/bitmap_4@2x.jpg 600w, ${PUBLIC_URL}/img/bitmap_4@3x.jpg 900w`}
      src={`${PUBLIC_URL}/img/bitmap_4.jpg`}
      alt="Product photo"
    />
    <Photo
      srcSet={`${PUBLIC_URL}/img/bitmap_2@2x.jpg 600w, ${PUBLIC_URL}/img/bitmap_2@3x.jpg 900w`}
      src={`${PUBLIC_URL}/img/bitmap_2.jpg`}
      alt="Product photo"
    />
    <Photo
      srcSet={`${PUBLIC_URL}/img/bitmap@2x.jpg 600w, ${PUBLIC_URL}/img/bitmap@3x.jpg 900w`}
      src={`${PUBLIC_URL}/img/bitmap.jpg`}
      alt="Product photo"
    />
    <Photo
      srcSet={`${PUBLIC_URL}/img/bitmap_3@2x.jpg 600w, ${PUBLIC_URL}/img/bitmap_3@3x.jpg 900w`}
      src={`${PUBLIC_URL}/img/bitmap_3.jpg`}
      alt="Product photo"
    />
  </PhotosCarousel>);
