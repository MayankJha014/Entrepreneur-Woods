import React, { useEffect, useState } from "react";
import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar";
import { useNavigate, useParams } from "react-router-dom";
import { getPostByCategories, searchPost } from "../redux/action/post_action";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import SEO from "../seo";

const SearchPage = () => {
  const navigate = useNavigate();

  const [size, setSize] = useState();
  const [loading, setLoading] = useState(false);
  const getPostSize = () => {
    const size = document.getElementById("post");
    setSize(size.clientHeight / 17);
  };

  const { category } = useSelector((state) => state.category);
  const { posts, isLoading } = useSelector((state) => state.search);
  const { recent } = useSelector((state) => state.recent);

  return (
    <>
      <SEO
        title={`Search | Entrepeneurs WOODS`}
        description={`Search Latest News and Update on Startup , Bussiness & Funding.`}
        keywords={`${category?.join(", ")}`}
      />
      <div className=" w-[95%] lg:w-[85%] mx-auto">
        <Navbar />
        <div>
          <div className="grid gap-4 lg:grid-cols-7">
            {!isLoading ? (
              <div
                className="col-span-5 content-start  flex flex-col sm:flex-row flex-wrap p-2 justify-evenly gap-4"
                id="post"
              >
                {posts &&
                  posts.map((x) => {
                    return (
                      <div
                        className="flex flex-col sm:w-[45%]  gap-4 my-2 cursor-pointer"
                        onClick={() => navigate(`/post/${x._id}`)}
                      >
                        <img
                          src={x.thumbnail}
                          alt=""
                          className="aspect-video object-cover"
                        />
                        <div className="block">
                          <p className="text-xs text-gray-600 font-medium px-1 py-2">
                            Craig Bator - 27 Dec 2020
                          </p>{" "}
                          <p className="text-lg text-left font-oswald px-1  font-semibold line-clamp-2">
                            {x.title}{" "}
                          </p>
                          <p className="line-clamp-2 text-sm px-1 font-sofia-sans text-gray-600 py-1 ">
                            {x.contentSnippet}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="col-span-5">
                <div class="wrapper">
                  <div class="box-wrap">
                    <div class="box one"></div>
                    <div class="box two"></div>
                    <div class="box three"></div>
                    <div class="box four"></div>
                    <div class="box five"></div>
                    <div class="box six"></div>
                  </div>
                </div>
              </div>
            )}
            <div className="basis-1/4 col-span-2 ml-auto flex flex-col ">
              <div className="hidden lg:flex w-full font-oswald font-medium text-base items-center flex-col my-10">
                <div className="flex w-full basis-1/4 py-4">
                  <p className="border-b border-red-500 basis-1/3 text-red-500 py-2 text-center whitespace-nowrap">
                    Stay Connected
                  </p>
                  <p className="border-b border-black basis-1/3 py-2 mt-6 text-center "></p>
                  <p className="border-b border-black basis-1/3 py-2 mt-6 text-center whitespace-nowrap"></p>
                </div>
                <div className="flex flex-col py-8 bg-[#DEDADA] justify-between gap-4 my-2 w-full">
                  <p className="font-oswald text-xl font-semibold py-2 mx-auto">
                    Get Latest Updates
                  </p>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Your Email Address"
                    className="w-4/5 mx-auto p-3 placeholder:text-center"
                  />
                  <div className="w-4/5 mx-auto bg-[#F65050] text-center py-3 font-sofia-sans  text-white font-medium">
                    Subscribe
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex gap-4 flex-col w-full font-oswald font-medium text-base items-center mb-10">
                <div className="flex w-full">
                  <p className="border-b border-red-500 basis-1/3 text-red-500 py-2 text-center whitespace-nowrap">
                    Categories
                  </p>
                  <p className="border-b border-black basis-1/3 py-2 mt-6 text-center "></p>
                  <p className="border-b border-black basis-1/3 py-2 mt-6 text-center whitespace-nowrap"></p>
                </div>
                <div className="flex-col font-normal gap-2 flex basis-1/4 w-full ml-auto">
                  <div className="flex gap-4 items-center my-1 flex-wrap">
                    {category &&
                      category.map((x) => {
                        return (
                          <div
                            onClick={() => navigate(`/category/${x}`)}
                            className="bg-slate-200 font-semibold font-sofia-sans-condensed text-base cursor-pointer px-2 py-1 rounded-md"
                          >
                            {x}
                          </div>
                        );
                      })}
                  </div>
                </div>{" "}
              </div>
              <div className=" my-4">
                <div className="hidden lg:flex basis-1/4 w-full font-oswald font-medium text-base items-center justify-evenly">
                  <p className="border-b border-black w-full  py-2 ">Recent</p>
                </div>
                <div
                  style={{ maxHeight: `${size}vh` }}
                  className="flex-col relative  overflow-scroll scrollbar-hide hidden lg:flex  ml-auto"
                >
                  {recent &&
                    Array.isArray(recent) &&
                    recent.map((x) => (
                      <div
                        className="flex justify-between gap-4 my-2 p-1 cursor-pointer"
                        onClick={() => navigate(`/post/${x._id}`)}
                      >
                        <img src={x.thumbnail} alt="" className="h-24 w-28" />
                        <div className="block">
                          <p className=" text-left font-oswald px-0.5  font-semibold line-clamp-3">
                            {x.title}
                          </p>
                          <p className="text-xs text-gray-600 font-medium px-0.5 py-1.5">
                            {x.creator} -{" "}
                            {format(new Date(x.isoDate), "yyyy-MM-dd")}{" "}
                          </p>{" "}
                        </div>
                      </div>
                    ))}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchPage;
