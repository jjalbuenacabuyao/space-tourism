import React from 'react';
import data from '../constants/data.json';

const Nav = () => {
  const links = data.home.links;
  const [home, destination, crew, tech] = links;
  return (
    <nav>
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