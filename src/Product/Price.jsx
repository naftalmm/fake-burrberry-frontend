import React from "react";
import { FormattedNumber } from "react-intl";

export default props => {
  return (
    <div className={props.className}>
      <FormattedNumber
        style="currency"
        currency={props.currency}
        currencyDisplay="code"
        value={props.value}
        minimumFractionDigits={0}
        maximumFractionDigits={0}
      />
    </div>
  );
};
