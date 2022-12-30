import React from "react";
import data from "../constants/data.json";
import { Link } from "react-router-dom";

const isVisible = "translate-x-0";
const notVisible = "translate-x-[200%]";

const Nav = (props) => {
  const links = data.home.links;
  const [home, destination, crew, tech] = links;
  return (
    <nav
      className={`fixed top-0 bottom-0 right-0 w-[67.73%] ${
        props.visible ? isVisible : notVisible
      }`}
    >
      <ul>
        <li>
          <Link to="/">{home}</Link>
        </li>
        <li>
          <Link to="/destination">{destination}</Link>
        </li>
        <li>
          <Link to="/crew">{crew}</Link>
        </li>
        <li>
          <Link to="/technology">{tech}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
