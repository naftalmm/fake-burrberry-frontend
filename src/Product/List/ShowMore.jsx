import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SecondaryButton from './../../common/Buttons/SecondaryButton';

const ShowMore = styled.div`
  display: inline-block;
  margin-bottom: 5rem;
`;

const CurrentlyShown = styled.h3`
  margin-top: 3rem;
  margin-bottom: 1rem;

  font-family: Lora;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  color: #171717;

  @media only screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const ViewMoreButton = styled(SecondaryButton)`
  padding: 1rem 2rem;
`;

const ShowMoreWrapper = props =>
  (<div className={props.className}>
    <ShowMore>
      <CurrentlyShown>
        Showing {props.currentlyShownCards} of {props.totalCards}
      </CurrentlyShown>
      <ViewMoreButton>
        View {props.totalCards - props.currentlyShownCards} more
      </ViewMoreButton>
    </ShowMore>
  </div>);

ShowMoreWrapper.defaultProps = {
  className: '',
};

ShowMoreWrapper.propTypes = {
  className: PropTypes.string,
  currentlyShownCards: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
};

export default styled(ShowMoreWrapper)`
  text-align: center;
`;
