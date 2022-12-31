import React from "react";
import data from "../constants/data.json";
import { Link } from "react-router-dom";

const isVisible = "translate-x-0";
const notVisible = "translate-x-[200%]";

const Nav = (props) => {
  const links = data.home.links;
  const [home, destination, crew, tech] = links;
  const liStyle = "text-base font-barlow-condensed pl-8 tracking-[2.7px] uppercase md:py-10 md:pl-0";
  const numStyle = "font-bold mr-3";

  return (
    <nav
      className={`fixed top-0 bottom-0 right-0 w-[67.73%] bg-white/[.04] backdrop-blur-[81.55px] ${
        props.visible ? isVisible : notVisible
      } md:static md:w-auto md:transform-none`}
    >
      <ul className="flex flex-col gap-9 pt-32 md:flex-row md:py-0 md:px-12">
        <li className={liStyle}>
          <span className={numStyle}>00</span>
          <Link to="/">{home}</Link>
        </li>
        <li className={liStyle}>
          <span className={numStyle}>01</span>
          <Link to="/destination">{destination}</Link>
        </li>
        <li className={liStyle}>
          <span className={numStyle}>02</span>
          <Link to="/crew">{crew}</Link>
        </li>
        <li className={liStyle}>
          <span className={numStyle}>03</span>
          <Link to="/technology">{tech}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
