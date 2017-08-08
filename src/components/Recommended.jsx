import React from 'react';

export default() => {
  return (
    <section className="product-recommended-container">
      <h2 className="product-recommended-header underlined">WE RECOMMEND</h2>
      <div className="product-recommended-list">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <a className="product-recommended">
                <img className="product-recommended-photo" src="img/img1.jpg" alt="Recommended product photo"/>
                <p className="product-recommended-name">Emroided Hooded</p>
                <p className="product-recommended-price">27 000 руб.</p>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a className="product-recommended">
                <img className="product-recommended-photo" src="img/img2.jpg" alt="Recommended product photo"/>
                <p className="product-recommended-name">Relaxed Fit Stretch Jeans</p>
                <p className="product-recommended-price">22 500 руб.</p>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a className="product-recommended">
                <img className="product-recommended-photo" src="img/img3.jpg" alt="Recommended product photo"/>
                <p className="product-recommended-name">Leather and House Check</p>
                <p className="product-recommended-price">120 000 руб.</p>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a className="product-recommended">
                <img className="product-recommended-photo" src="img/img4.jpg" alt="Recommended product photo"/>
                <p className="product-recommended-name">Leather Wingtip Check</p>
                <p className="product-recommended-price">46 000 руб.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>      
  );    
}