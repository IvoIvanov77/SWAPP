import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  HeaderContainer,
  LogoContainer,
  NavigationListItem,
} from './header.styles';

const Header = ({ onClick }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <NavLink to="/">
          <span>SWAPP</span>
        </NavLink>
      </LogoContainer>
      <NavigationListItem>
        <NavLink to="/episodes">Episodes</NavLink>
      </NavigationListItem>
      <NavigationListItem>
        <NavLink to="/characters">Characters</NavLink>
      </NavigationListItem>
      <NavigationListItem>
        <NavLink to="/login">Login</NavLink>
      </NavigationListItem>
      <button onClick={onClick}>change theme</button>
    </HeaderContainer>
  );
};

export default Header;
