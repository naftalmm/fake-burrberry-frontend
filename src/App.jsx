import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { Xs, XsMd, MdLg, Lg } from './common/Responsive';
import SectionHeader from './common/SectionHeader';
import Header from './Header/';
import Product from './Product/';
import Description from './Product/Description';
import Photo from './Product/Photo';
import Delivery from './Delivery/';
import Accordion from './common/Accordion/';
import Recommended from './Recommended/';
import RecommendedMore from './Recommended/RecommendedMore';
import Gallery from './Product/Gallery';
import Footer from './Footer/';
import './App.css';

addLocaleData([...en, ...ru]);

export default () => (
  <IntlProvider locale="ru">
    <div>
      <Header />
      <XsMd>
        <hr />
      </XsMd>

      <Product
        backgroundColor="#d4bdad"
        title="Long Cotton Gabardine Car Coat"
        priceValue={100000}
        priceCurrency="RUB"
        vendorCode="39428531"
      />

      <Xs>
        <Accordion />
      </Xs>
      <MdLg>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <SectionHeader>DESCRIPTION</SectionHeader>
              <Description />
            </div>
            <Lg>
              <div className="col-lg-8">
                <Photo
                  srcSet="img/bitmap_5@2x.jpg 600w, img/bitmap_5@3x.jpg 900w"
                  src="img/bitmap_5.jpg"
                  alt="Product photo"
                />
              </div>
            </Lg>
          </div>
          <Lg>
            <Gallery />
          </Lg>
          <div className="row">
            <div className="col-md-12">
              <Delivery />
            </div>
          </div>
        </div>
      </MdLg>

      <Recommended />
      <Xs>
        <RecommendedMore />
      </Xs>
      <Footer />
    </div>
  </IntlProvider>
);
