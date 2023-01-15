import React, { useState } from "react";
import data from "../constants/data.json";
import Tablist from "./Tablist";
import Image from "./Image";
import TextContainer from "./TextContainer";
import DistanceTravel from "./DistanceTravel";

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
    <div className="flex flex-col items-center gap-8 text-center px-hero lg:grid lg:grid-cols-2 lg:items-center">
      <Image
        border="false"
        order="order-1"
        webpSrc={active.images.webp}
        pngSrc={active.images.png}
        alt={active.imgAlt}
        className="aspect-square w-img-responsive m-auto"
      />

      <article className="flex flex-col gap-5 lg:gap-8 lg:text-left order-2">
        <ul className="flex items-center gap-6 text-sm justify-center lg:justify-start lg:text-base lg:gap-8 order-1">{listItems}</ul>
        <TextContainer order="order-2" paddingBottom="pb-8" bordered="true">
          <h1 className="font-bellefair text-planet-name uppercase leading-[1.2em]">
            {active.name}
          </h1>
          <p>{active.description}</p>
        </TextContainer>

        <div className="flex flex-col gap-8 pt-8 lg:flex-row lg:gap-20 order-3">
          <DistanceTravel
            title={active.distanceTitle}
            value={active.distance}
          />
          <DistanceTravel title={active.travelTitle} value={active.travel} />
        </div>
      </article>
    </div>
  );
};

export default TabMenu;
