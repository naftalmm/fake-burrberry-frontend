import React, { Component } from "react";
import Header from "./components/Header/";
import Product from "./components/Product/";
import Accordeon from "./components/Accordeon/";
import Recommended from "./components/Recommended/";
import RecommendedMore from "./components/RecommendedMore/";
import Footer from "./components/Footer/";
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
        <Accordeon />
        <Recommended />
        <RecommendedMore />
        <Footer />
      </div>
    );
  }
}

export default App;
