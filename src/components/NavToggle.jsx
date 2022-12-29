import React from 'react';

const NavToggle = props => {
  return (
    <button className={`h-[21px] w-6 ${ props.isOpened ? "bg-close" : "bg-hamburger"} bg-no-repeat z-50`} onClick={ props.toggle }>
      <span className='sr-only'>Toggle Menu</span>
    </button>
  )
}

export default NavToggle