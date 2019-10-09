import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      {/* <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link> */}
      <div className="options">
        <NavLink className="option" to="/episodes">
          Episodes
        </NavLink>
        <NavLink className="option" to="/characters">
          Characters
        </NavLink>
        <NavLink className="option" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
