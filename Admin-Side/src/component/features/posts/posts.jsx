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

const Posts = () => {
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isMessage, posts } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(getCreatorPost());
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
