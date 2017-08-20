import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/';
import Footer from './Footer/';
import List from './Product/List/';
import Show from './Product/Show/';
import './App.css';

addLocaleData([...en, ...ru]);

export default () =>
  (<IntlProvider locale="ru">
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/:section/:category/:id" component={Show} />
          <Route path="/:section/:category" component={List} />
          <Route path="/:section" component={List} />
          <Redirect from="/" to="/men" />
          <Redirect from="/" to="/men" />
        </Switch>
        <Footer />
      </div>
    </Router>
  </IntlProvider>);
