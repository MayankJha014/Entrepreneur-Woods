import React, { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearchAlt2 } from "react-icons/bi";
import sidebarContext from "./context/sidebar_context";
import { useDispatch } from "react-redux";
import { searchPost } from "../redux/action/post";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const sidebarWidth = useContext(sidebarContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (document.location.pathname != "/dash/post") {
      navigate("/dash/post");
    }
    dispatch(searchPost(e.target.value));
  };

  return (
    <div className="bg-white w-full p-4 sticky top-0 z-30">
      <div className="flex justify-between">
        <div className="flex items-center">
          <RxHamburgerMenu
            size={20}
            onClick={() => sidebarWidth.updateSidebar()}
          />
          <div className="md:w-72 lg:w-[20rem]  relative  border rounded-2xl overflow-hidden mx-8 md:flex items-center hidden">
            <BiSearchAlt2
              className=" mx-2 p-0.5 text-black border-2-r  border-gray-300"
              size={24}
            />
            <input
              type="text"
              className="md:w-60 lg:w-full  bg-white p-1.5  border-0 focus:outline-none text-base"
              placeholder="Search related posts & articles"
              onChange={handleSubmit}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <img
              src="data:image/jpeg;base64,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"
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <div className="px-2 block">
              <h1 className="text-sm font-medium text-stone-500">Mayank Jha</h1>
              <h1 className="text-xs text-stone-500 ">Author</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
