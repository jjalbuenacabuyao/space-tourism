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
  const imageProps = {
    border: false,
    order: "order-1",
    webpSrc: active.images.webp,
    pngSrc: active.images.png,
    alt: active.imgAlt,
    className: "aspect-square w-img-responsive m-auto",
  };

  return (
    <div className="flex flex-col items-center gap-8 px-hero text-center lg:grid lg:grid-cols-2 lg:items-center">
      <Image {...imageProps} />

      <article className="order-2 flex flex-col gap-5 lg:gap-8 lg:text-left">
        <ul className="order-1 flex items-center justify-center gap-6 text-sm lg:justify-start lg:gap-8 lg:text-base">
          {listItems}
        </ul>
        <TextContainer className="order-2 pb-8" bordered="true">
          <h1 className="font-bellefair text-planet-name uppercase leading-[1.2em]">
            {active.name}
          </h1>
          <p className="max-w-md">{active.description}</p>
        </TextContainer>

        <div className="order-3 flex flex-col gap-8 pt-8 lg:flex-row lg:gap-20">
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
