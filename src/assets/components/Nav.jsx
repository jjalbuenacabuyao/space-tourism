import React from 'react';
import data from '../constants/data.json';

const isVisible = "translate-x-0";
const notVisible = "translate-x-full";

const Nav = props => {
  const links = data.home.links;
  const [home, destination, crew, tech] = links;
  return (
    <nav className={`${ props.visible ? isVisible : notVisible}`}>
      <ul>
        <li><a href="#">{ home }</a></li>
        <li><a href="#">{ destination }</a></li>
        <li><a href="#">{ crew }</a></li>
        <li><a href="#">{ tech }</a></li>
      </ul>
    </nav>
  )
}

export default Nav