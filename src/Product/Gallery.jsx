import React from "react";
import styled from "styled-components";
import Photo from "./Photo";

const Gallery = styled.div`margin-bottom: 4rem;`;

const Image = styled.div`
  &:nth-child(odd) {
    margin-top: 6rem;
  }

  &:nth-child(even) {
    margin-top: 10rem;
  }
`;

export default () => {
  return (
    <div className="container">
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
    </div>
  );
};
