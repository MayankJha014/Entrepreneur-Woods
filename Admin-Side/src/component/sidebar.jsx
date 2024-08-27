import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { TbReport } from "react-icons/tb";
import { IoIosCreate } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import sidebarContext from "./context/sidebar_context";
import Navbar from "./navbar";

const Sidebar = ({ children }) => {
  const navIndex = [
    {
      title: "Posts",
      icon: <TbReport size={21} />,
      link: "/dash/post",
    },
    {
      title: "Create Post",
      icon: <IoIosCreate size={22} />,
      link: "/dash/create-post",
    },
    {
      title: "Theme",
      icon: <FaRegEdit size={22} />,
      link: "/dash/theme",
    },
  ];

  const sidebarWidth = useContext(sidebarContext);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-[#eef1fe] flex">
        <div
          className="absolute right-5 top-5 sm:hidden bg-black text-white shadow-lg w-6 h-6 rounded-full text-center"
          onClick={() => sidebarWidth.updateSidebar()}
        >
          X
        </div>
        <div
          className={`bg-white h-full transition-all duration-300  ${
            sidebarWidth.sidebar ? "w-20" : "w-72"
          } `}
        >
          <div className="flex flex-col min-h-full ">
            <div className="basis-24 flex justify-center items-center">
              {sidebarWidth.sidebar ? (
                <h1 className="text-xl font-extrabold font-serif text-red-700">
                  EW
                </h1>
              ) : (
                <img src={Logo} alt="logo" className="max-w-[65%]" />
              )}
            </div>
            <div
              className={`text-stone-500 text-sm font-medium w-4/5 mx-auto flex ${
                sidebarWidth.sidebar ? "items-center" : ""
              } flex-col`}
            >
              <p
                className={`${sidebarWidth.sidebar ? "hidden" : "block mt-4"}`}
              >
                Navigation
              </p>{" "}
              <div className="mb-5 mt-2">
                {navIndex.map((x, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={x.link}
                      className="contents"
                      activeClassName="active"
                    >
                      <li className="contents text-[0.7375rem] relative ">
                        <div className="flex items-center  py-3 text-gray-500 mt-2">
                          <div
                            className={`${
                              sidebarWidth.sidebar ? "scale-125 mt-2" : ""
                            }`}
                          >
                            {x.icon}
                          </div>
                          <h1
                            className={`px-6 text-base font-sans whitespace-nowrap ${
                              sidebarWidth.sidebar ? "hidden" : "block"
                            }`}
                          >
                            {x.title}
                          </h1>
                        </div>
                      </li>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full relative ${
            sidebarWidth.sidebar ? "block" : "hidden sm:block"
          }  flex-1 min-h-full  scroll-smooth overflow-y-auto`}
          id="allpost"
        >
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
