import React from "react";

const Tooltip = ({ text }) => {
  return (
    <div className="absolute  bg-gray-100 text-black text-sm font-semibold rounded-xl bg-opacity-95 py-1 px-4 z-10">
      {text}
    </div>
  );
};

export default Tooltip;
