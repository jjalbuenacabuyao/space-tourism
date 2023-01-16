import React, { useState } from "react";
import HeroContainer from "./HeroContainer";
import NumberedHeading from "./NumberedHeading";
import data from "../constants/data.json";
import TextContainer from "./TextContainer";
import Image from "./Image";

const HeroTechnology = () => {
  const tech = data.technology;
  const heading = tech[0].heading;
  const num = tech[0].num;
  const [, vehicle, spaceport, capsule] = tech;
  const [active, setActive] = useState(vehicle);
  const technologies = [vehicle, spaceport, capsule];
  const nums = [1, 2, 3, 4];
  let listItems = technologies.map((techs, index) => (
    <li key={techs.id}>
      <button
        onClick={() => setActive(techs)}
        className={`aspect-square text-base font-bellefair w-10 rounded-full border-[1px] ${techs === active ? "bg-white text-clr-dark border-white" : "bg-transparent border-off-white text-white"}`}
      >
        {nums[index]}
      </button>
    </li>
  ));

  return (
    <HeroContainer className="bg-tech-mobile md:bg-tech-tablet lg:bg-tech-desktop pb-[6.5rem]">
      <NumberedHeading
        num={num}
        text={heading}
        className="md:pl-10 lg:px-hero"
      />
      <article className="flex flex-col items-center gap-8 px-0 text-center lg:grid lg:grid-cols-[2fr_1fr] lg:text-left">
        <picture className="w-full lg:order-2">
          <source srcset={active.images.portrait} media="(min-width: 1024px)"/>
          <img src={active.images.landscape} alt="" className="w-full"/>
        </picture>

        <TextContainer className="px-hero lg:order-1 lg:flex-row lg:pr-0">
          <ul className="flex gap-4 justify-center lg:flex-col lg:gap-8">{listItems}</ul>
          <div className="flex flex-col gap-6">
            <h1 className="flex flex-col gap-2 font-bellefair text-2xl uppercase md:gap-3 md:text-[2.5rem]">
            <span className="text-base opacity-50 md:text-2xl">
              The terminology ...
            </span>
            <span>{active.name}</span>
            </h1>
            <p className="max-w-[29.375rem]">{active.description}</p>
          </div>
        </TextContainer>
      </article>
    </HeroContainer>
  )
}

export default HeroTechnology