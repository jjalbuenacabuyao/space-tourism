import React from "react";
import HeroContainer from "./HeroContainer";
import data from "../constants/data.json";
import TabMenu from "./TabMenu";
import NumberedHeading from "./NumberedHeading";

const HeroDestination = () => {
  const heading = data.destinations[0].heading;
  const num = data.destinations[0].num;
  return (
    <HeroContainer px="px-hero" pb="pb-[3.75rem]" bg="bg-dest-mobile md:bg-dest-tablet lg:bg-dest-desktop">
      <NumberedHeading num={num} text={heading} />
      <TabMenu />
    </HeroContainer>
  );
};

export default HeroDestination;
