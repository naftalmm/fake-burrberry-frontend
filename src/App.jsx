import React, { Component } from "react";
import Header from "./Header/";
import Product from "./Product/";
import Accordion from "./common/Accordion/";
import Recommended from "./Recommended/";
import RecommendedMore from "./RecommendedMore/";
import Footer from "./Footer/";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Product
          title="Long Cotton Gabardine Car Coat"
          priceValue="100 000"
          priceCurrency="руб."
          vendorCode="39428531"
        />
        <Accordion />
        <Recommended />
        <RecommendedMore />
        <Footer />
      </div>
    );
  }
}

export default App;
