import React from "react";
import { FormattedNumber } from "react-intl";

export default props => {
  return (
    <span className={props.className}>
      <FormattedNumber
        // eslint-disable-next-line
        style="currency"
        currency={props.currency}
        currencyDisplay="code"
        value={props.value}
        minimumFractionDigits={0}
        maximumFractionDigits={0}
      />
    </span>
  );
};
