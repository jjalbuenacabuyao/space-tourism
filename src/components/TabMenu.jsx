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
    <div className="flex flex-col items-center gap-8 text-center lg:grid lg:grid-cols-2">
      <Image
        webpSrc={active.images.webp}
        pngSrc={active.images.png}
        alt={active.imgAlt}
        className="aspect-square w-img-responsive"
      />

      <article className="lg:flex lg:flex-col lg:gap-8">
        <ul className="flex items-center gap-6 text-sm">{listItems}</ul>
        <TextContainer paddingBottom="pb-8" bordered="true">
          <h1 className="font-bellefair text-planet-name uppercase leading-[1.3em]">
            {active.name}
          </h1>
          <p>{active.description}</p>
        </TextContainer>

        {/* <div>
        <h1 className="font-bellefair text-planet-name uppercase">
            {active.name}
          </h1>
          <p>{active.description}</p>
        </div> */}

        <div className="flex flex-col gap-8 pt-8">
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
