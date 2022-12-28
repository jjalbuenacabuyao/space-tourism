import React, { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import NavToggle from './NavToggle';
import data from '../constants/data.json';

const Header = () => {
  const [ visible, setVisible ] = useState(false);

  const logo = data.home.logo;
  return (
    <header className='pl-6 py-6 flex'>
      <Logo src={ logo } />
      <NavToggle toggle={() => setVisible(!visible)} isOpened={visible}/>
      <Nav visible={visible} />
    </header>
  )
}

export default Header