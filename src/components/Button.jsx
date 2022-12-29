import React from 'react';
import data from '../constants/data.json';

const Button = () => {
  const home = data.home;
  return (
    <button className='text-xl tracking-[1.25px] uppercase px-30px py-68px font-bellefair text-clr-dark bg-white rounded-[50%]'>
      { home.btnText }
    </button>
  )
}

export default Button