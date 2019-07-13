import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import {
  Switch, Redirect, BrowserRouter as Router, Route,
} from 'react-router-dom';
import SideNav from './SideNav';
import Header from './Header';
import Footer from './Footer';
import List from './Product/List';
import Show from './Product/Show';
import './App.css';

addLocaleData([...en, ...ru]);

const Page = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transition-duration: 0.25s;
  ${props => props.isSideNavOpened
    && css`
      transform: translate3d(274px, 0, 0);
      @media screen and (min-width: 48rem) {
        transform: none;
      }
    `};
  background: #fff;
`;

class App extends Component {
  state = { isSideNavOpened: false };

  handleSideNavToggle = () => this.setState(prevState => ({
    isSideNavOpened: !prevState.isSideNavOpened,
  }));

  render() {
    const { isSideNavOpened } = this.state;
    return (
      <IntlProvider locale="ru">
        <Router>
          <div>
            <SideNav
              isSideNavOpened={isSideNavOpened}
              onToggle={this.handleSideNavToggle}
            />
            <Page isSideNavOpened={isSideNavOpened}>
              <Header
                isSideNavOpened={isSideNavOpened}
                handleSideNavToggle={this.handleSideNavToggle}
              />
              <Switch>
                <Route path="/:section/:category/:id" component={Show} />
                <Route path="/:section/:category" component={List} />
                <Route path="/:section" component={List} />
                <Redirect from="/" to="/men" />
              </Switch>
              <Footer />
            </Page>
          </div>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
