import React, { useEffect } from "react";
import Logo from "../../../assets/Logo.png";
import AdBanner from "../../../assets/ad.png";
import Time from "../../../assets/time.png";
import Facebook from "../../../assets/Facebook.png";
import Instagram from "../../../assets/Instagram.png";
import Twitter from "../../../assets/Twitter.png";
import YouTube from "../../../assets/Youtube.png";
import Search from "../../../assets/search.png";
import { NavLink } from "react-router-dom";

const UserNavbar = (props) => {
  let curtDate = new Date().toDateString();

  const NAVINDEX = [
    {
      title: "Home",
      Path: "/",
    },
    {
      title: "Educational",
      Path: "/education",
    },
    {
      title: "Business",
      Path: "/business",
    },
    {
      title: "Entrepreneur",
      Path: "/entrepreneur",
    },
    {
      title: "Startup",
      Path: "/startup",
    },
  ];

  return (
    <div>
      <div className="flex justify-between py-1 px-4 shadow-sm  ">
        <div className="flex items-center gap-2 ">
          <img src={Time} alt="" className="h-4" />
          <p className="text-base font-sofia-sans font-medium tracking-wide">
            {curtDate}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <img src={Facebook} alt="" className="h-5 w-5" />
          <img src={Twitter} alt="" className="h-5 w-5" />
          <img src={Instagram} alt="" className="h-5 w-5" />
          <img src={YouTube} alt="" className="h-5 w-5" />
        </div>
      </div>
      <div
        className={`flex items-center `}
        style={{
          justifyContent:
            props.headerUi.navPosition == ""
              ? "space-between"
              : props.headerUi.navPosition,
        }}
      >
        <img
          src={props.headerUi.logo == "" ? Logo : props.headerUi.logo}
          alt=""
          className={`h-32 object-contain w-1/5 ${
            props.headerUi.logo == null ? " hidden" : ""
          }`}
        />
        <img
          src={props.headerUi.adsImage == "" ? Logo : props.headerUi.adsImage}
          alt=""
          className={`h-32 object-contain w-3/5 ${
            props.headerUi.adsImage == null ? " hidden" : ""
          }`}
        />
      </div>
      <div className="flex justify-between  items-center overflow-auto  bg-[#393939]">
        <div className="basis-3/5 flex">
          {props.navItem?.map((x, index) => {
            return (
              <div className="hover:bg-[#F65050] py-4 px-4 text-white font-sofia-sans-condensed font-semibold">
                <p className="  transition-all duration-300  ease-linear border-white tracking-wider">
                  {x.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="basis-16 hidden md:flex px-7 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="h-fit py-3 focus:text-white focus:border-none focus:ring-transparent focus:outline-none bg-[#393939] text-sm"
          />
          <img src={Search} className="h-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
