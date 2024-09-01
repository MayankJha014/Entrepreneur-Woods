import React, { useState } from "react";
import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar";
import PhotoImg from "../assets/photo.jpg";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/action/category_action";
import { getPostByCategories, getPostById } from "../redux/action/post_action";
import { format } from "date-fns";
import "react-quill/dist/quill.snow.css";
import SEO from "../seo";

const PostDetail = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [size, setSize] = useState();
  const [recent, setRecent] = useState();
  const [keyPoint, setKeyPoint] = useState();
  const getRecentPost = async () => {
    const data = await getPostByCategories("News", 10);
    console.log(data);
    setRecent(data);
  };

  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllCategories());
    getRecentPost();
  }, []);

  useEffect(() => {
    if (posts) {
      getContent();
    }
  }, [posts]);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [id]);

  const getContent = () => {
    const postContent = document.getElementById("content");

    if (!postContent) {
      console.error("Element with id 'content' not found.");
      return;
    }

    let content = posts.content.replace(
      "<p>The post  appeared first on .</p>",
      ""
    );

    content = content.replace(
      `<p><strong>Also Read:</strong></p>
  <ul>
  <li style="font-weight: bold;"><strong></strong></li>
  </ul> `,
      ""
    );
    content = content.replace(`<p><strong>Also Read:</strong></p>`, "");

    console.log(content);
    setSize(postContent.clientHeight / 17);
    postContent.innerHTML = content;

    // Ensure the img element exists before accessing classList
    const img = postContent.querySelector("img");
    if (img) {
      img.classList.add("aspect-[2.0]", "h-fit", "p-2", "!my-2");
    } else {
      console.warn("No img element found in postContent.");
    }

    // Ensure there are p elements before adding classes
    const pTags = postContent.querySelectorAll("p");
    if (pTags.length > 0) {
      pTags.forEach((x) => {
        x.classList.add("my-1.5", "p-2");
      });
    } else {
      console.warn("No p elements found in postContent.");
    }
  };

  useEffect(() => {
    setKeyPoint(posts?.contentSnippet?.indexOf(".")); // Find the index of the first dot
    console.log(posts);
  }, [posts]);

  return (
    <>
      {
        <SEO
          title={`${posts?.title} | Entrepeneurs WOODS`}
          description={`${posts?.contentSnippet?.substring(0, keyPoint)}`}
          keywords={`${posts?.categories?.join(", ")}`}
        />
      }
      <div className="flex flex-col justify-between min-h-screen">
        <div className=" w-[95%] lg:w-[85%] mx-auto">
          <Navbar />
          {posts ? (
            <div>
              <div className="grid gap-4 lg:grid-cols-7">
                <div className="ql-editor contents">
                  <div className="col-span-5  flex flex-col  p-2  gap-2">
                    <h1 className="text-3xl font-semibold font-oswald text-gray-800 p-1 mt-4">
                      {posts.title}
                    </h1>

                    <div className="my-2 font-poppins text-lg" id="content">
                      {posts.content}
                    </div>
                    <div>{posts.src}</div>
                  </div>
                </div>
                <div className="basis-1/4 col-span-2 ml-auto relative flex flex-col ">
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
                    <div className="flex-col h-11/12 hidden lg:flex basis-1/4 w-full ml-auto">
                      <div className="flex gap-4 items-center my-1 flex-wrap">
                        {category &&
                          category.map((x) => {
                            return (
                              <div
                                onClick={() => navigate(`/category/${x}`)}
                                className="bg-slate-200 font-semibold text-sm cursor-pointer px-2 py-1 rounded-md"
                              >
                                {x}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                  <div className=" my-4">
                    <div className="hidden lg:flex basis-1/4 w-full font-oswald font-medium text-base items-center justify-evenly">
                      <p className="border-b border-black w-full  py-2 ">
                        Recent
                      </p>
                    </div>
                    <div
                      style={{ maxHeight: `${size}vh` }}
                      className="flex-col relative  overflow-scroll scrollbar-hide hidden lg:flex  ml-auto"
                    >
                      {recent &&
                        Array.isArray(recent) &&
                        recent.map((x) => (
                          <div
                            className="flex justify-between gap-4 my-2 cursor-pointer p-1"
                            onClick={() => navigate(`/post/${x._id}`)}
                          >
                            <img
                              src={x.thumbnail}
                              alt=""
                              className="h-24 w-28"
                            />
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
          ) : (
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
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PostDetail;
