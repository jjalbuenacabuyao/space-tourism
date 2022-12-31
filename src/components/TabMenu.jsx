import React, { useState } from "react";
import data from "../constants/data.json";
import Tablist from "./Tablist";
import Image from "./Image";

const TabMenu = () => {
  const destinations = data.destinations;
  //First item is not included
  const [, moon, mars, europa, titan] = destinations;
  const [active, setActive] = useState(moon);
  const planets = [moon, mars, europa, titan];
  let listItems = planets.map((planet) => (
    <li key={planet.id}>
      <Tablist planet={planet} active={active} setter={setActive} />
    </li>
  ));

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <Image
        webpSrc={active.images.webp}
        pngSrc={active.images.png}
        alt={active.imgAlt}
        className="aspect-square w-[10.625rem]"
      />
      <ul className="flex items-center gap-6 text-sm">{listItems}</ul>
      <article>
        <div className="flex flex-col gap-6 border-b-[1px] border-b-off-white pb-8">
          <h1 className="font-bellefair text-planet-name uppercase">
            {active.name}
          </h1>
          <p>{active.description}</p>
        </div>
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex flex-col gap-3">
            <p className="font-barlow-condensed text-sm uppercase">
              {active.distanceTitle}
            </p>
            <p className="font-bellefair text-[1.75rem] uppercase">
              {active.distance}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-barlow-condensed text-sm uppercase">
              {active.travelTitle}
            </p>
            <p className="font-bellefair text-[1.75rem] uppercase">
              {active.travel}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TabMenu;
