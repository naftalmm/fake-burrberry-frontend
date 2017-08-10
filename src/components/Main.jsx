import React from "react";

export default () => {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <div className="product-photos-container">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="img/bitmap_4@2x.jpg 600w, img/bitmap_4@3x.jpg 900w"
              />
              <img
                className="product-photo"
                src="img/bitmap_4.jpg"
                alt="Product photo"
              />
            </picture>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="img/bitmap_2@2x.jpg 600w, img/bitmap_2@3x.jpg 900w"
              />
              <img
                className="product-photo"
                src="img/bitmap_2.jpg"
                alt="Product photo"
              />
            </picture>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="img/bitmap@2x.jpg 600w, img/bitmap@3x.jpg 900w"
              />
              <img
                className="product-photo"
                src="img/bitmap.jpg"
                alt="Product photo"
              />
            </picture>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="img/bitmap_3@2x.jpg 600w, img/bitmap_3@3x.jpg 900w"
              />
              <img
                className="product-photo"
                src="img/bitmap_3.jpg"
                alt="Product photo"
              />
            </picture>
          </div>
        </div>

        <div className="col-xs-12 col-md-5">
          <div className="product-info-container">
            <h2 className="product-price">110 000 руб.</h2>
            <p className="product-code">Item 39428531</p>
          </div>

          <div className="product-color-container">
            <p className="product-color-current-selection-name">
              Colour: Honey
            </p>
            <div className="product-color-pallete">
              <button
                className="product-color-pallete-selector color-selector-black color-selector-inactive"
                type="button"
              >
                <span hidden>Change colour to black</span>
              </button>
              <button
                className="product-color-pallete-selector color-selector-honey color-selector-active"
                type="button"
              >
                <span hidden>Change colour to honey</span>
              </button>
            </div>
            <hr />
          </div>

          <div className="product-actions">
            <button className="product-size-select" type="button">
              SELECT A SIZE
            </button>
            <button className="product-find" type="button">
              FIND IN STORE
            </button>
            <button className="product-size-help" type="button">
              NEED SIZE HELP?
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
