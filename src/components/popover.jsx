//@ts-check

import React from "react";

const Popover = ({ isPopoverOpen, setIsPopoverOpen, children }) => {
  return (
    <div
      className="popup"
      style={{
        display: isPopoverOpen ? "flex" : "none",
      }}
      onClick={() => {
        setIsPopoverOpen(false);
      }}
    >
      <div className="content">{children}</div>
    </div>
  );
};

export default Popover;
