import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import { Xs, MdLg } from '../common/Responsive';
import Hamburger from './Hamburger';
import LocationSelector from './ShopLocationSelector';
import TabGroup from '../common/TabGroup';

const Header = ({ isSideNavOpened, handleSideNavToggle }) => (
  <div className="container">
    <div className="row start-xs">
      <div className="col-xs-1 col-md-4">
        <Xs>
          <Hamburger isSideNavOpened={isSideNavOpened} onClick={handleSideNavToggle} />
        </Xs>
        <MdLg>
          <LocationSelector />
        </MdLg>
      </div>
      <div className="col-xs-10 col-md-4">
        <div className="box">
          <div className="row center-xs">
            <div className="col-xs-12">
              <Logo />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row center-xs">
      <MdLg>
        <TabGroup />
      </MdLg>
    </div>
  </div>
);

Header.propTypes = {
  isSideNavOpened: PropTypes.bool.isRequired,
  handleSideNavToggle: PropTypes.func.isRequired,
};

export default Header;
