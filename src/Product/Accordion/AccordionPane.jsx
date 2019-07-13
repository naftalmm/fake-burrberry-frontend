import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import AccordionPaneHeader from './AccordionPaneHeader';

const AccordionPaneWrapper = styled.div`
  padding-top: 2rem;
  border-top: solid 1px #c6c6c6;
`;

const AccordionPaneEntry = styled.div`${props => !props.isOpened && css`display: none`};`;

const AccordionPane = ({
  className, isOpened, headerName, content,
}) => (
  <AccordionPaneWrapper className={className}>
    <AccordionPaneHeader isOpened={isOpened} name={headerName} />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <AccordionPaneEntry isOpened={isOpened}>
            {content}
          </AccordionPaneEntry>
        </div>
      </div>
    </div>
  </AccordionPaneWrapper>
);

AccordionPane.defaultProps = {
  className: '',
};

AccordionPane.propTypes = {
  className: PropTypes.string,
  isOpened: PropTypes.bool.isRequired,
  headerName: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};

export default AccordionPane;
