import React from 'react';

const Header = () => {

  return (

    <header className="header">
      <div id="logo">
        <h1>Mreacts</h1>
      </div>
      <navbar>
        <ul>
          <li>Home</li>
          <li>Countries</li>
          <li>Dashboard</li>
        </ul>
      </navbar>
    </header>
  );
};

export default Header;