import React, { useState } from "react";
import HeroContainer from "./HeroContainer";
import NumberedHeading from "./NumberedHeading";
import data from "../constants/data.json";
import TextContainer from "./TextContainer";
import Image from "./Image";

const HeroCrew = () => {
  const crew = data.crew;
  const heading = crew[0].heading;
  const num = crew[0].num;
  const [, douglas, mark, victor, anousheh] = crew;
  const [active, setActive] = useState(douglas);
  const persons = [douglas, mark, victor, anousheh];
  let listItems = persons.map((person) => (
    <li key={person.id}>
      <button
        onClick={() => setActive(person)}
        className={`aspect-square w-[10px] rounded-full bg-white lg:w-[15px] ${
          person === active ? "" : "opacity-[0.17]"
        }`}
      ></button>
    </li>
  ));
  const imageProps = {
    border: true,
    order: "order-1 md:order-3",
    webpSrc: active.images.webp,
    pngSrc: active.images.png,
    alt: active.imgAlt,
    className: "m-auto h-person-img"
  }

  return (
    <HeroContainer className="bg-crew-mobile pb-[6.5rem] md:bg-crew-tablet md:pb-0 lg:bg-crew-desktop">
      <NumberedHeading
        num={num}
        text={heading}
        className="md:pl-10 lg:px-hero"
      />
      <article className="flex flex-col items-center gap-8 px-hero text-center lg:grid lg:grid-cols-2 lg:text-left">
        <Image {...imageProps} />

        <TextContainer className="order-2 pb-0 md:order-1" bordered="false">
          <ul className="z-1 order-3 flex justify-center gap-5 lg:justify-start xl:mt-24">
            {listItems}
          </ul>
          <h1 className="order-1 flex flex-col gap-2 font-bellefair text-2xl uppercase md:gap-3 md:text-[2.5rem]">
            <span className="text-base opacity-50 md:text-2xl">
              {active.role}
            </span>
            <span>{active.name}</span>
          </h1>
          <p className="order-2 max-w-md">{active.bio}</p>
        </TextContainer>
      </article>
    </HeroContainer>
  );
};

export default HeroCrew;
