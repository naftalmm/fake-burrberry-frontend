import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CurrentSelectionName = props =>
  (<div className={props.className}>
    {props.label}: <b>{props.value}</b>
  </div>);

CurrentSelectionName.defaultProps = {
  className: '',
};

CurrentSelectionName.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default styled(CurrentSelectionName)`
  margin: 0;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
`;

