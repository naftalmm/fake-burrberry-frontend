import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrow from '../assets/arrow.svg';

const SubNavigationStyled = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const BackButton = styled.button`
  position: relative;
  padding: 1rem 0.5rem;

  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  color: #171717;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::before {
    display: inline-block;
    margin-right: 0.25rem;
    content: url(${arrow});
    transform: rotate(90deg);
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 169px;
  background: url(${props => props.image}) no-repeat;
  background-size: cover;
`;

const Title = styled.h3`
  margin: 0;
  padding: 1rem 0.5rem;

  background-color: rgba(255, 255, 255, 0.7);
  font-family: Lora;
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #171717;
`;

const Links = styled.div`margin: 0.75rem 0.5rem;`;

const Link = styled(NavLink)`
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  font-size: 0.875rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 1rem;
  color: #171717;
  text-decoration: none;
  &.active {
    font-weight: 700;
  }
`;

const SubNavigation = ({ onClose, navigation }) => (
  <SubNavigationStyled>
    <BackButton type="button" onClick={onClose}>
      Home
    </BackButton>
    <Header image={navigation.image}>
      <Title>{navigation.title}</Title>
    </Header>
    <Links>
      {navigation.links.map(link => (
        <Link to={link.url} key={link.url}>
          {link.title}
        </Link>
      ))}
    </Links>
  </SubNavigationStyled>
);

SubNavigation.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SubNavigation;
