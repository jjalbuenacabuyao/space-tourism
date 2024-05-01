import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const links = ["Home", "Destination", "Crew", "Technology"];
  const path = useLocation();
  const pathname = path.pathname;

  return (
    <header className="relative flex items-center justify-between p-6 md:py-0 md:pl-10 md:pr-0">
      <Link to={"/"}>
        <img
          src="/images/shared/logo.svg"
          alt="Space Tourism Logo"
          className="h-10 w-10"
        />
      </Link>

      <nav
        data-expanded={navExpanded}
        className="fixed top-0 bottom-0 right-0 left-[45%] translate-x-full bg-white/5 pl-8 pt-32  backdrop-blur-[85px] transition-all data-[expanded=true]:translate-x-0 md:static md:translate-x-0 md:pt-6"
      >
        <ul className="flex flex-col gap-8 md:flex-row md:pr-10">
          {links.map((link, index) => (
            <li>
              <Link
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={`grid grid-cols-[1.25rem_auto] gap-2 font-barlow-condensed uppercase tracking-[2.7px] md:block ${
                  pathname === link.toLowerCase() ||
                  (pathname === "/" && link === "Home")
                    ? "border-r-2 border-white md:border-r-0 md:border-b-2 md:pb-6"
                    : ""
                }`}
              >
                <span className="font-bold md:hidden">0{index}</span>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        aria-expanded={navExpanded}
        onClick={() => setNavExpanded(!navExpanded)}
        className="z-50 md:hidden"
      >
        <img
          src={
            navExpanded
              ? "/images/shared/icon-close.svg"
              : "/images/shared/icon-hamburger.svg"
          }
          alt={navExpanded ? "Close icon" : "Hamburger menu"}
          className={`h-5 ${navExpanded ? "w-5" : "w-6"}`}
        />
      </button>
    </header>
  );
};

export default Header;
