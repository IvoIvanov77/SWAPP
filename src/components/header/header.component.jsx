import React from 'react';
import { NavLink } from 'react-router-dom';

import ChangeTheme from '../change-theme/change-theme.container';
import LogoutButton from '../logout/logout-button.container';
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
        <LogoutButton />
      </NavigationListItem>
      <NavigationListItem>
        <NavLink to="/episodes">Episodes</NavLink>
      </NavigationListItem>
      <NavigationListItem>
        <NavLink to="/characters">Characters</NavLink>
      </NavigationListItem>
    </HeaderContainer>
  );
};

export default Header;
