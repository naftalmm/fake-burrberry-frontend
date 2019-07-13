import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

const FormattedPrice = ({ className, currency, value }) => (
  <span className={className}>
    <FormattedNumber
      // eslint-disable-next-line
      style="currency"
      currency={currency}
      currencyDisplay="symbol"
      value={value}
      minimumFractionDigits={0}
      maximumFractionDigits={0}
    />
  </span>
);

FormattedPrice.defaultProps = {
  className: '',
};

FormattedPrice.propTypes = {
  className: PropTypes.string,
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default FormattedPrice;
