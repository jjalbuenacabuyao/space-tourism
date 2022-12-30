import React, { useState } from "react";
import data from "../constants/data.json";

const TabMenu = () => {
  const destinations = data.destinations;
  //First item is not included
  const [, moon, mars, europa, titan] = destinations;
  const [active, setActive] = useState(moon);
  const buttonStyle = "font-barlow-condensed uppercase tracking-[2.36px] pb-3";

  return (
    <div className="text-center flex flex-col items-center gap-8">
      <picture>
        <source srcset={active.images.webp} />
        <source srcset={active.images.png} />
        <img
          src={active.images.png}
          alt={active.imgAlt}
          className="w-[10.625rem] aspect-square"
        />
      </picture>
      <ul className="flex gap-6 items-center text-sm">
        <li>
          <button
            onClick={() => setActive(moon)}
            aria-selected={active == moon ? "true" : "false"}
            className={`${buttonStyle} ${
              active == moon ? "border-b-[3px] border-b-off-white" : ""
            }`}
          >
            {moon.name}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive(mars)}
            aria-selected={active == mars ? "true" : "false"}
            className={`${buttonStyle} ${
              active == mars ? "border-b-[3px] border-b-off-white" : ""
            }`}
          >
            {mars.name}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive(europa)}
            aria-selected={active == europa ? "true" : "false"}
            className={`${buttonStyle} ${
              active == europa ? "border-b-[3px] border-b-off-white" : ""
            }`}
          >
            {europa.name}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive(titan)}
            aria-selected={active == titan ? "true" : "false"}
            className={`${buttonStyle} ${
              active == titan ? "border-b-[3px] border-b-off-white" : ""
            }`}
          >
            {titan.name}
          </button>
        </li>
      </ul>
      <article>
        <div className="flex flex-col gap-6 pb-8 border-b-[1px] border-b-off-white">
          <h1 className="text-planet-name uppercase font-bellefair">{active.name}</h1>
          <p>{active.description}</p>
        </div>
        <div className="flex flex-col gap-8 pt-8">
          <div className="flex flex-col gap-3">
            <p className="uppercase text-sm font-barlow-condensed">{active.distanceTitle}</p>
            <p className="uppercase font-bellefair text-[1.75rem]">{active.distance}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="uppercase text-sm font-barlow-condensed">{active.travelTitle}</p>
            <p className="uppercase font-bellefair text-[1.75rem]">{active.travel}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TabMenu;
