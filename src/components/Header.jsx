import React, { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import NavToggle from './NavToggle';
import data from '../constants/data.json';

const Header = () => {
  const [ visible, setVisible ] = useState(false);

  const logo = data.home.logo;
  return (
    <header className='px-responsive py-6 md:pr-0 flex sticky top-0 left-0 right-0 items-center justify-between'>
      <Logo src={ logo } />
      <NavToggle toggle={() => setVisible(!visible)} isOpened={visible}/>
      <Nav visible={visible} />
    </header>
  )
}

export default Header