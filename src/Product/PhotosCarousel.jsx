import React from "react";
import styled from "styled-components";
import Photo from "./Photo";

const PhotosCarousel = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-left: -1rem;
  margin-right: -1rem;

  @media only screen and (min-width: 48rem) {
    margin-left: -.5rem;
    margin-right: 0;
  }
`;

export default () => {
  return (
    <PhotosCarousel>
      <Photo
        srcSet="img/bitmap_4@2x.jpg 600w, img/bitmap_4@3x.jpg 900w"
        src="img/bitmap_4.jpg"
        alt="Product photo"
      />
      <Photo
        srcSet="img/bitmap_2@2x.jpg 600w, img/bitmap_2@3x.jpg 900w"
        src="img/bitmap_2.jpg"
        alt="Product photo"
      />
      <Photo
        srcSet="img/bitmap@2x.jpg 600w, img/bitmap@3x.jpg 900w"
        src="img/bitmap.jpg"
        alt="Product photo"
      />
      <Photo
        srcSet="img/bitmap_3@2x.jpg 600w, img/bitmap_3@3x.jpg 900w"
        src="img/bitmap_3.jpg"
        alt="Product photo"
      />
    </PhotosCarousel>
  );
};
