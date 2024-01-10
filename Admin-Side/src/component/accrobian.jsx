import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const Accrobian = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`   w-11/12 mx-auto duration-500 overflow-hidden  transition-all my-4`}
    >
      <div
        className="flex justify-between rounded-lg bg-gray-300 border-b border-gray-700/50   px-2 py-3"
        onClick={() => setOpen(!open)}
      >
        <p className="text-lg font-roboto font-medium">{props.heading}</p>
        <BiChevronRight
          size={25}
          className={`${open ? "rotate-0" : "rotate-90"} duration-200 `}
        />
      </div>
      <div
        className={` duration-700 transition-all bg-white rounded-b-lg`}
        style={
          open
            ? {
                height: props.height,
              }
            : {
                height: 0,
              }
        }
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accrobian;
