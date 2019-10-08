import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      {/* <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link> */}
      <div className="options">
        <Link className="option" to="/episodes">
          Episodes
        </Link>
        <Link className="option" to="/characters">
          Characters
        </Link>
        <Link className="option" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
