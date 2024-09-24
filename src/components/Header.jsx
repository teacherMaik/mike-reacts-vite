import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (

    <header className="header">
      <div id="logo">
        <h1>Mreacts</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              >Countries</NavLink>
          </li>
          <li>
            <NavLink
              to='/Game42'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              >42 The Game</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;