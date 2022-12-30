import React from "react";

const Tablist = (props) => {
  const buttonStyle = "font-barlow-condensed uppercase tracking-[2.36px] pb-3";
  const isActive = props.active == props.planet;
  return (
    <button
      onClick={() => props.setter(props.planet)}
      className={`${buttonStyle} ${
        isActive ? "border-b-[3px] border-b-off-white" : ""
      }`}
      aria-selected={isActive ? "true" : "false"}
    >
      {props.planet.name}
    </button>
  );
};

export default Tablist;
