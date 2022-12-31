import React from "react";

const TextContainer = (props) => {
  return (
    <div
      className={`flex flex-col gap-6 ${props.paddingBottom} ${
        props.bordered === "true" ? "border-b-[1px] border-b-off-white" : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default TextContainer;
