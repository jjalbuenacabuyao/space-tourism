import React from 'react';
import data from '../constants/data.json';

const NavToggle = () => {
  return (
    <button className='h-[21px] w-6 bg-close bg-no-repeat'>
      <span className='sr-only'>Toggle Menu</span>
    </button>
  )
}

export default NavToggle