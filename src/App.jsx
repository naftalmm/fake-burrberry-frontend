import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import Header from "./Header/";
import Product from "./Product/";
import Accordion from "./common/Accordion/";
import Recommended from "./Recommended/";
import RecommendedMore from "./RecommendedMore/";
import Footer from "./Footer/";
import "./App.css";
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...ru]);

class App extends Component {
  render() {
    return (
      <IntlProvider locale="ru">
        <div>
          <Header />
          <Product
            title="Long Cotton Gabardine Car Coat"
            priceValue={100000}
            priceCurrency="RUB"
            vendorCode="39428531"
          />
          <Accordion />
          <Recommended />
          <RecommendedMore />
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
