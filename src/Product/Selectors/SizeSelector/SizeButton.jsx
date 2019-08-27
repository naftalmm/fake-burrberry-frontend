import styled from 'styled-components';
import SecondaryButton from '../../../common/Buttons/SecondaryButton';

export default styled(SecondaryButton)`
  padding: .5rem 1rem;
  margin-right: .5rem;
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
`;
