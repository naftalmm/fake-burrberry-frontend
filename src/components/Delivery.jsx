import React from "react";

export default () => {
  return (
    <section className="delivery-container hidden-xs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <img
              className="delivery-img"
              src="img/delivery.jpg"
              srcSet="img/delivery@2x.jpg 2x, img/delivery@3x.jpg 3x"
              alt="Product boxing"
            />
          </div>
          <div className="col-md-5">
            <h2 className="delivery-header">DELIVERY</h2>
            <h3 className="delivery-feature-name">Free Next Day Delivery</h3>
            <p className="delivery-feature-description">
              Order before 7pm Monday to Thursday for delivery the next day
            </p>
            <h3 className="delivery-feature-name">Collect-in-Store</h3>
            <p className="delivery-feature-description">
              Order online today and pick up your items in store as early as
              tomorrow
            </p>
            <h3 className="delivery-feature-name">Free Returns</h3>
            <p className="delivery-feature-description">
              Enjoy free returns on your order
            </p>
            <h3 className="delivery-feature-name">Free Gift Packaging</h3>
            <p className="delivery-feature-description">
              Discover our gift packaging, a gold lined box tied with a coloured
              ribbon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
