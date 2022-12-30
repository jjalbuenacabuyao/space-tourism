import React, { useState } from "react";
import data from "../constants/data.json";
import Tablist from "./Tablist";

const TabMenu = () => {
  const destinations = data.destinations;
  //First item is not included
  const [, moon, mars, europa, titan] = destinations;
  const [active, setActive] = useState(moon);
  const planets = [moon, mars, europa, titan];
  let listItems = planets.map(planet => <Tablist planet={planet} active={active} setter={setActive} />);

  return (
    <div className="text-center flex flex-col items-center gap-8">
      <picture>
        <source srcSet={active.images.webp} />
        <source srcSet={active.images.png} />
        <img
          src={active.images.png}
          alt={active.imgAlt}
          className="w-[10.625rem] aspect-square"
        />
      </picture>
      <ul className="flex gap-6 items-center text-sm">
        {listItems}
      </ul>
      <article>
        <div className="flex flex-col gap-6 pb-8 border-b-[1px] border-b-off-white">
          <h1 className="text-planet-name uppercase font-bellefair">
            {active.name}
          </h1>
          <p>{active.description}</p>
        </div>
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex flex-col gap-3">
            <p className="uppercase text-sm font-barlow-condensed">
              {active.distanceTitle}
            </p>
            <p className="uppercase font-bellefair text-[1.75rem]">
              {active.distance}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="uppercase text-sm font-barlow-condensed">
              {active.travelTitle}
            </p>
            <p className="uppercase font-bellefair text-[1.75rem]">
              {active.travel}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TabMenu;
