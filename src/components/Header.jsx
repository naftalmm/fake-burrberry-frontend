import React from 'react';
import logo from './../logo.svg';

export default() => {
  return (
    <header className="logo-container">
      <a><img className="logo" src={logo} alt="Burberry Logo"/></a>
    </header>
  );
}