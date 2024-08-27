import React from "react";
import Logo from "../../assets/Logo.png";
import AdBanner from "../../assets/ad.png";
import Time from "../../assets/time.png";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import Twitter from "../../assets/Twitter.png";
import YouTube from "../../assets/Youtube.png";
import Search from "../../assets/search.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchPost } from "../../redux/action/post_action";

const Navbar = () => {
  let curtDate = new Date().toDateString();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { home } = useSelector((state) => state.homeDetail);

  return (
    <div>
      {home ? (
        <>
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
          <div className="flex items-center justify-between ">
            <img
              src={home?.navLogo}
              alt=""
              className="h-3/4 w-3/4 sm:w-32 my-4 md:h-32 mx-auto md:m-0 md:w-1/5 object-contain"
            />
            <img
              src={home?.adsLogo}
              alt=""
              className="h-32 w-3/5 aspect-video py-2 px-2 hidden lg:block"
            />
          </div>
          <div className="flex justify-between  items-center overflow-auto  bg-[#393939]">
            <div className="basis-3/5 flex">
              <NavLink to={"/"} activeClassNam="active">
                <div className="hover:bg-[#F65050] py-4 px-4 text-white font-sofia-sans-condensed font-semibold">
                  <p className="  transition-all duration-300  ease-linear border-white tracking-wider">
                    Home
                  </p>
                </div>
              </NavLink>
              {home &&
                home?.navabar?.map((x, index) => {
                  return (
                    <NavLink key={index} to={x.link} activeClassNam="active">
                      <div className="hover:bg-[#F65050] py-4 px-4 text-white font-sofia-sans-condensed font-semibold">
                        <p className="  transition-all duration-300  ease-linear border-white tracking-wider">
                          {x.title}
                        </p>
                      </div>
                    </NavLink>
                  );
                })}
            </div>
            <div className="basis-16 hidden md:flex px-7 items-center">
              <input
                type="text"
                placeholder="Search..."
                className="h-fit py-3 focus:text-white focus:border-none focus:ring-transparent focus:outline-none bg-[#393939] text-sm"
                onChange={(e) => {
                  dispatch(searchPost(e.target.value));
                  navigate("/search"); // Navigate to the search page
                }}
              />
              <img src={Search} className="h-4" alt="" />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
