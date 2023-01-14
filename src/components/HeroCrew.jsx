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
      className={`w-[10px] aspect-square rounded-full bg-white ${person === active ? "" : "opacity-[0.17]"}`}></button>
    </li>
  ));

  return (
    <HeroContainer
      px="px-hero"
      pb="pb-[3.75rem] lg:pb-32"
      bg="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop"
    >
      <NumberedHeading num={num} text={heading} />
      <div className="px-hero flex flex-col items-center">
        <Image
          webpSrc={active.images.webp}
          pngSrc={active.images.png}
          alt={active.imgAlt}
          className="h-[222px]"
        />
        <ul className="flex justify-center gap-5 z-1">{listItems}</ul>
        <TextContainer paddingBottom="pb-0" bordered="false">
          <h1>
            <span>{active.role}</span>
            <br />
            {active.name}
          </h1>
          <p>{active.bio}</p>
        </TextContainer>
      </div>
    </HeroContainer>
  );
};

export default HeroCrew;
