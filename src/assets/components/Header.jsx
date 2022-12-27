import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import data from '../constants/data.json';

const Header = () => {
  const logo = data.home.logo;
  return (
    <header className='pl-6 py-6 flex'>
      <Logo src={ logo } />
      <Nav />
    </header>
  )
}

export default Header