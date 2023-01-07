import React from "react";
import HeroText from "./HeroText";
import Button from "./Button";

const HeroHome = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20 bg-home-mobile bg-cover bg-fixed bg-center bg-no-repeat px-hero pt-28 pb-hero-home-pb md:bg-home-tablet xmd:flex-row xmd:items-end xmd:justify-between xmd:bg-home-desktop">
      <HeroText />
      <Button />
    </main>
  );
};

export default HeroHome;
