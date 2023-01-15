import React from "react";

const HeroContainer = (props) => {
  return (
    <main
      className={`flex min-h-screen flex-col gap-8 bg-cover bg-fixed bg-center bg-no-repeat pt-20 md:pt-[8.5rem] lg:pt-52 lg:gap-14 ${props.className}`}
    >
      {props.children}
    </main>
  );
};

export default HeroContainer;
