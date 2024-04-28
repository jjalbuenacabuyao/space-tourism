import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="h-10 w-10">
      <img src="/images/shared/logo.svg" alt="Space Tourism Logo" />
    </Link>
  );
};

export default Logo;
