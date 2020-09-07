//@ts-check
import React from "react";
import { BiPlayCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="recommended">
      <BiPlayCircle fontSize={30} />
      <h2>Recommended Software Download</h2>
    </div>
  );
};

export default Header;
