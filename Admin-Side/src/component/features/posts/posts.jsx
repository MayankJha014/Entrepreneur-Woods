import React, { useEffect, useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import "react-quill/dist/quill.snow.css";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { generatePosts, getCreatorPost } from "../../../redux/action/post";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { addPostsData, clearPosts } from "../../../redux/slice/post";
import _ from "lodash";

const Posts = () => {
  const [view, setView] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isMessage, posts } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(clearPosts());
    dispatch(getCreatorPost(1));
  }, []);
  useEffect(() => {
    console.log(page);
  }, [page]);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const debouncedFetchPosts = _.debounce(() => {
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      dispatch(getCreatorPost(newPage));
      return newPage;
    });
  }, 800);

  useEffect(() => {
    const scrollPostId = document.getElementById("allpost");

    const handleScroll = async () => {
      const scrollTop = scrollPostId.scrollTop;
      const scrollHeight = scrollPostId.scrollHeight;
      const clientHeight = scrollHeight - document.body.offsetHeight;

      if (scrollTop == clientHeight) {
        debouncedFetchPosts();
      }
    };

    scrollPostId.addEventListener("scroll", handleScroll);

    return () => {
      scrollPostId.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMessage) {
      toast.success(isMessage);
      console.log(isMessage);
    }
  }, [isMessage]);

  return (
    <>
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between  mt-8 mb-4 mx-auto">
          {/* <button className="px-1 sm:px-6 py-2 h-fit bg-black border-2 border-black hover:shadow-lg rounded-xl text-white hover:bg-white hover:text-black duration-300 hover:transition-all ">
          Create New Post
        </button> */}
          <p className="text-2xl font-semibold font-sans mx-5"> All Posts</p>
          {/* <select
            name=""
            id=""
            className="px-0.5 sm:px-3 py-2 rounded-lg border h-fit border-gray-400"
          >
            <option value="">All Post</option>
            <option value="">Most View Post</option>
            <option value="">Least View Post</option>
          </select> */}
          {isLoading == false ? (
            <button
              className="p-2 bg-red-500 rounded-lg text-white"
              onClick={() => {
                dispatch(generatePosts());
                dispatch(getCreatorPost());
              }}
            >
              Generate Posts
            </button>
          ) : (
            <button className="p-2 bg-red-500 rounded-lg text-white">
              Loading
            </button>
          )}
        </div>
        <div className="w-full bg-white rounded-2xl shadow-xl">
          <div className=" flex flex-col gap-3 lg:w-11/12 mx-auto pt-8 p-4 ">
            {posts &&
              Array.isArray(posts) &&
              posts?.map((x) => (
                <div className="flex p-3 border-2 rounded-2xl border-gray-300">
                  <img
                    src={x?.thumbnail}
                    className="w-28 h-20 hidden md:block"
                    alt=""
                  />
                  <div className="w-3/4 px-3 relative ">
                    <p className="font-medium font-serif line-clamp-2">
                      {x.title}
                    </p>

                    <div className="pl-1 flex absolute items-center -bottom-1 text-sm text-gray-500 ">
                      <p className="mr-2 ">{x?.creator}</p>
                      <p className="mr-2 hidden sm:block">15 Aug</p>
                      {x?.categories?.map((cat) => {
                        return (
                          <p className="mx-0.5 px-3 py-1 h-fit hidden sm:block border border-gray-400 rounded-2xl bg-white">
                            {cat}
                          </p>
                        );
                      })}
                      <div className="flex gap-1 items-center ">
                        <AiOutlineEye size={20} className="text-gray-500" />
                        <span className="text-gray-500">{x?.view}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-auto z-10">
                    {/* {!view ? (
                      <AiOutlineEye
                        className="bg-white mr-2 mt-auto border hover:bg-black hover:text-white duration-300 hover:scale-125 shadow-lg rounded-full h-9 p-2 w-9 my-1"
                        size={30}
                        onClick={() => setView(!view)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="bg-white mr-2 mt-auto border hover:bg-black hover:text-white duration-300 hover:scale-125 shadow-lg rounded-full h-9 p-2 w-9 my-1"
                        size={30}
                        onClick={() => setView(!view)}
                      />
                    )} */}
                    <div className="ml-auto">
                      {/* <Link to={`/dash/create-post/${x._id}`}> */}
                      <AiOutlineEdit
                        size={30}
                        className="bg-white border hover:bg-black hover:text-white duration-300 hover:scale-125 shadow-lg rounded-full h-9 p-2 w-9 my-1"
                        onClick={() => {
                          navigate(`/dash/create-post/${x?._id}`, {
                            replace: false,
                          });
                        }}
                      />
                      {/* </Link> */}
                      <MdDeleteOutline
                        size={30}
                        className="bg-white border hover:bg-black hover:text-white duration-300 hover:scale-125 shadow-lg rounded-full h-9 p-2 w-9 my-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            {isLoading && (
              <div role="status" className="mx-auto">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin  fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
