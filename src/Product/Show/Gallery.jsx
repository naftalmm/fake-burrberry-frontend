import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';

const Gallery = styled.div`margin-bottom: 4rem;`;

const Image = styled.div`
  &:nth-child(1) {
    margin-top: 6rem;
  }

  &:nth-child(2) {
    margin-top: 10rem;
  }

  &:nth-child(3) {
    margin-top: 4rem;
  }
`;

const { PUBLIC_URL } = process.env;
export default () =>
  (<div className="container">
    <Gallery className="row">
      <Image className="col-lg-4">
        <Photo
          srcSet={`${PUBLIC_URL}/img/bitmap_3@2x.jpg 600w, ${PUBLIC_URL}/img/bitmap_3@3x.jpg 900w`}
          src={`${PUBLIC_URL}/img/bitmap_3.jpg`}
          alt="Product photo"
        />
      </Image>
      <Image className="col-lg-4">
        <Photo
          srcSet={`${PUBLIC_URL}/img/bitmap@2x.jpg 600w, ${PUBLIC_URL}/img/bitmap@3x.jpg 900w`}
          src={`${PUBLIC_URL}/img/bitmap.jpg`}
          alt="Product photo"
        />
      </Image>
      <Image className="col-lg-4">
        <Photo
          srcSet={`${PUBLIC_URL}/img/bitmap_2@2x.jpg 600w, ${PUBLIC_URL}/img/bitmap_2@3x.jpg 900w`}
          src={`${PUBLIC_URL}/img/bitmap_2.jpg`}
          alt="Product photo"
        />
      </Image>
    </Gallery>
  </div>);
