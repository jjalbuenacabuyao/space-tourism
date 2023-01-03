import React from "react";
import data from "../constants/data.json";

const HeroText = () => {
  const home = data.home;
  return (
    <article className="text-center max-w-[27.75rem] mx-auto lg:mx-0 lg:text-left">
      <h1 className="font-barlow-condensed text-base text-heading uppercase leading-[3em] tracking-[2.7px]">
        {home.heading}
        <br />
        <span className="tracking-0 font-bellefair text-highlight leading-[1.3em]">
          {home.highlight}
        </span>
      </h1>

      <p>{home.description}</p>
    </article>
  );
};

export default HeroText;
