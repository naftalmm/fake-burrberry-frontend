import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Accordeon from './components/Accordeon';
import Delivery from './components/Delivery';
import Recommended from './components/Recommended';
import RecommendedMore from './components/RecommendedMore';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>
        <Main />
        <Accordeon />
        <Delivery />
        <Recommended />
        <RecommendedMore />
        <Footer />
      </div>
    );
  }
}

export default App;
