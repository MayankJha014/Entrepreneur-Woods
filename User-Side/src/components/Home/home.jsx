import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import BussinessTopic from "./business_topic";
import CarouselNews from "./carousel_news";
import EnterpenuerTopic from "./reatil_topic";
import Header from "./header";
import HotTopic from "./hotTopic";
import PodCastNews from "./podcast_news";
import VideoNews from "./video_topics";
import {
  getMostViewPost,
  getPostByCategories,
} from "../../redux/action/post_action";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../../App.scss";
import SEO from "../../seo";

export const homeDetail = createAsyncThunk("homeDetail", async () => {
  const mostView = await getMostViewPost();
  const carousel = await getPostByCategories("Funding Fusion", 7);
  const bussiness1 = await getPostByCategories("B2B", 7);
  const bussiness2 = await getPostByCategories("B2C", 7);
  const enterpenuer = await getPostByCategories("Retail", 7);
  const homeData = {
    mostView: mostView,
    carousel: carousel,
    bussiness: [...bussiness1, ...bussiness2],
    enterpenuer: enterpenuer,
  };
  return homeData;
});

const Home = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const [keyword, setKeyword] = useState("");

  const { home, isLoading } = useSelector((state) => state.home);

  useEffect(() => {
    setKeyword(category?.join(", "));
  }, [category]);
  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  return (
    <>
      <SEO
        title="Home | Entrepeneurs WOODS"
        description="Get Latest News and Update about Startup and Bussiness"
        keywords={`${category?.join(", ")}`}
      />
      {isLoading ? (
        <div class="loading">
          <div class="loading-text">
            <span class="loading-text-words">L</span>
            <span class="loading-text-words">O</span>
            <span class="loading-text-words">A</span>
            <span class="loading-text-words">D</span>
            <span class="loading-text-words">I</span>
            <span class="loading-text-words">N</span>
            <span class="loading-text-words">G</span>
          </div>
        </div>
      ) : (
        <>
          <div className=" w-full lg:w-4/5 mx-auto">
            <Navbar />
            <Header posts={home?.mostView} />
            <HotTopic post={home?.mostView} />

            <CarouselNews posts={home?.carousel} />
            <BussinessTopic posts={home?.bussiness} />
            <EnterpenuerTopic posts={home?.enterpenuer} />
            {/* <VideoNews />
        <PodCastNews /> */}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
