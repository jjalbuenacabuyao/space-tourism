import React, { useState } from "react";
import data from "../constants/data.json";

const TabMenu = () => {
  const destinations = data.destinations;
  //First item is not included
  const [, moon, mars, europa, titan] = destinations;
  const [active, setActive] = useState(moon);
  return (
    <div className="text-center flex flex-col items-center">
      <picture>
        <source srcset={active.images.webp} />
        <source srcset={active.images.png} />
        <img src={active.images.png} alt={active.imgAlt} className="w-[10.625rem] aspect-square"/>
      </picture>
      <ul>
        <li>
          <button
            onClick={() => setActive(moon)}
            aria-selected={active == moon ? "true" : "false"}
          >
            {moon.name}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive(mars)}
            aria-selected={active == mars ? "true" : "false"}
          >
            {mars.name}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive(europa)}
            aria-selected={active == europa ? "true" : "false"}
          >
            {europa.name}
          </button>
        </li>
        <li>
          <button
            onClick={() => setActive(titan)}
            aria-selected={active == titan ? "true" : "false"}
          >
            {titan.name}
          </button>
        </li>
      </ul>
      <article>
        <div>
          <h1>{active.name}</h1>
          <p>{active.description}</p>
        </div>
        <div>
          <div>
            <p>{active.distanceTitle}</p>
            <p>{active.distance}</p>
          </div>
          <div>
            <p>{active.travelTitle}</p>
            <p>{active.travel}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TabMenu;
