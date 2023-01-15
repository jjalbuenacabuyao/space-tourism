import React from "react";
import HeroContainer from "./HeroContainer";
import data from "../constants/data.json";
import TabMenu from "./TabMenu";
import NumberedHeading from "./NumberedHeading";

const HeroDestination = () => {
  const heading = data.destinations[0].heading;
  const num = data.destinations[0].num;
  return (
    <HeroContainer
      className="pb-[3.75rem] lg:pb-32 bg-dest-mobile md:bg-dest-tablet lg:bg-dest-desktop"
    >
      <NumberedHeading num={num} text={heading} className="md:pl-10 lg:px-hero" />
      <TabMenu />
    </HeroContainer>
  );
};

export default HeroDestination;
