import React from "react";
import data from "../constants/data.json";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const isVisible = "translate-x-0";
  const notVisible = "translate-x-[200%]";
  const links = data.home.links;
  const [home, destination, crew, tech] = links;
  const pages = [home, destination, crew, tech];
  const liStyle =
    "text-base font-barlow-condensed pl-8 tracking-[2.7px] uppercase md:py-10 md:pl-0";
  const location = useLocation();
  const numStyle = "font-bold mr-3 md:hidden lg:inline";
  const linkActive = "border-r-4 border-white md:border-r-0 md:border-b-4";
  const listItems = pages.map((link, index) => (
    <li
      key={link}
      className={`${liStyle} ${
        location.pathname === `/${link}` ? linkActive : ""
      }`}
    >
      <span className={numStyle}>{`0${index}`}</span>
      <Link to={`/${link}`}>{link}</Link>
    </li>
  ));

  return (
    <nav
      className={`fixed z-10 top-0 bottom-0 right-0 w-[67.73%] bg-white/[.04] backdrop-blur-[81.55px] ${
        props.visible ? isVisible : notVisible
      } md:static md:w-auto md:transform-none before:hidden before:xl:block before:w-[40vw] before:h-[1px] before:bg-off-white before:absolute before:top-[50%] before:right-[95%]`}
    >
      <ul className="flex flex-col gap-9 pt-32 md:flex-row md:py-0 md:px-responsive xl:px-[7.6875rem]">
        {listItems}
      </ul>
    </nav>
  );
};

export default Nav;
