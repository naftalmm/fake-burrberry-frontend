import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import {XS, XS_MD, MD_LG, LG} from "./common/Responsive";
import SectionHeader from "./common/SectionHeader";
import Header from "./Header/";
import Product from "./Product/";
import Description from "./Product/Description";
import Photo from "./Product/Photo";
import Delivery from "./Delivery/";
import Accordion from "./common/Accordion/";
import Recommended from "./Recommended/";
import RecommendedMore from "./Recommended/RecommendedMore";
import Gallery from "./Product/Gallery"
import Footer from "./Footer/";
import "./App.css";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

addLocaleData([...en, ...ru]);

export default () => {
  return (
    <IntlProvider locale="ru">
      <div>
        <Header />
        <XS_MD>
          <hr />
        </XS_MD>

        <Product
          backgroundColor="#d4bdad"
          title="Long Cotton Gabardine Car Coat"
          priceValue={100000}
          priceCurrency="RUB"
          vendorCode="39428531"
        />

        <XS>
          <Accordion />
        </XS>
        <MD_LG>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <SectionHeader>DESCRIPTION</SectionHeader>
                <Description />
              </div>
              <LG>
                <div className="col-lg-8">
                  <Photo
                    srcSet="img/bitmap_5@2x.jpg 600w, img/bitmap_5@3x.jpg 900w"
                    src="img/bitmap_5.jpg"
                    alt="Product photo"
                  />
                </div>
              </LG>
            </div>
            <LG>
              <Gallery />
            </LG>
            <div className="row">
              <div className="col-md-12">
                <Delivery />
              </div>
            </div>
          </div>
        </MD_LG>

        <Recommended />
        <XS>
          <RecommendedMore />
        </XS>
        <Footer />
      </div>
    </IntlProvider>
  );
};
