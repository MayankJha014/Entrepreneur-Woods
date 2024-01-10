import React from "react";
import { GrFormClose } from "react-icons/gr";

const Dailog = ({ open, setOpen, children, width, dialogText }) => {
  return (
    <>
      <div
        className={`bg-black/50 w-screen h-screen backdrop-blur-md fixed top-1/2 left-1/2 z-[40] -translate-x-2/4 -translate-y-1/2 ${
          open ? "block" : "hidden"
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      ></div>
      <div
        className={`bg-white ${width} h-fit  fixed top-1/2 rounded-xl  left-1/2 right-1/2 bottom-1/2 -translate-x-2/4 -translate-y-1/2 shadow-2xl shadow-black/50  z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center rounded-lg bg-gray-200 py-2 m-0 ">
          <div className=""></div>
          <h1 className="font-dosis font-bold">{dialogText}</h1>
          <GrFormClose
            size={30}
            className="my-2 mx-2"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="container p-6">{children}</div>
      </div>
    </>
  );
};

export default Dailog;
