import React from "react";

const Logo = (props) => {
  return (
    <div className="h-10 w-10">
      <img src={props.src} alt="Space Tourism Logo" />
    </div>
  );
};

export default Logo;
