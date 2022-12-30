import React from "react";

const HeroContainer = (props) => {
  return (
    <main
      className={`${props.px} ${props.pb} ${props.bg} flex min-h-screen flex-col gap-8 bg-cover bg-fixed bg-center bg-no-repeat pt-20`}
    >
      {props.children}
    </main>
  );
};

export default HeroContainer;
