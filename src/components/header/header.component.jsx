import React from 'react';
import { NavLink } from 'react-router-dom';

import ChangeTheme from '../../util/changeTheme';
import {
  HeaderContainer,
  LogoContainer,
  NavigationListItem,
} from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <ChangeTheme>swap</ChangeTheme>
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
    </HeaderContainer>
  );
};

export default Header;
