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
              >Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/search-country'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              >Search a Country
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;