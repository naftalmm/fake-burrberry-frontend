import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VendorCode = ({ className, value }) => (
  <p className={className}>
    Item
    {' '}
    {value}
  </p>
);

VendorCode.defaultProps = {
  className: '',
};

VendorCode.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default styled(VendorCode)`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
`;
