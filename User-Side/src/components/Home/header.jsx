import React, { useEffect, useState } from "react";
import SecondHeader from "../header/second-header";
import FirstHeader from "../header/first-header";
import ThirdHeader from "../header/third-header";
import ForthHeader from "../header/fourth-header";
import { useDispatch, useSelector } from "react-redux";
import { getMostViewPost } from "../../redux/action/post_action";
import HotTopic from "./hotTopic";

const Header = ({ posts, data = "1" }) => {
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {data === "1" ? <FirstHeader post={posts} /> : <></>}
      {data === "2" ? <SecondHeader post={posts} /> : <></>}
      {data === "3" ? <ThirdHeader post={posts} /> : <></>}
      {data === "4" ? <ForthHeader post={posts} /> : <></>}
    </div>
  );
};

export default Header;
