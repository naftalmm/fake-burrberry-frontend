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

export default () =>
  (<div className="container">
    <Gallery className="row">
      <Image className="col-lg-4">
        <Photo
          srcSet="img/bitmap_3@2x.jpg 600w, img/bitmap_3@3x.jpg 900w"
          src="img/bitmap_3.jpg"
          alt="Product photo"
        />
      </Image>
      <Image className="col-lg-4">
        <Photo
          srcSet="img/bitmap@2x.jpg 600w, img/bitmap@3x.jpg 900w"
          src="img/bitmap.jpg"
          alt="Product photo"
        />
      </Image>
      <Image className="col-lg-4">
        <Photo
          srcSet="img/bitmap_2@2x.jpg 600w, img/bitmap_2@3x.jpg 900w"
          src="img/bitmap_2.jpg"
          alt="Product photo"
        />
      </Image>
    </Gallery>
  </div>);
