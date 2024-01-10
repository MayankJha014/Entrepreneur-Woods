import React, { useEffect, useState } from "react";
import PhotoImg from "../../assets/photo.jpg";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { getPostByCategories } from "../../redux/action/post_action";

const HotTopic = ({ post }) => {
  const navigate = useNavigate();
  const [recent, setRecent] = useState();
  const getRecentPost = async () => {
    const data = await getPostByCategories("News", 10);
    console.log(data);
    setRecent(data);
  };

  useEffect(() => {
    getRecentPost();
  }, []);
  return post ? (
    <div className="py-2">
      <div className="flex justify-center my-5 lg:justify-between gap-6">
        <div className="flex basis-[95%] overflow-auto scrollbar-hide lg:basis-[70%] items-center justify-between border-b  border-black/50 ">
          <p className="text-[#F65050]  font-oswald font-medium text-2xl pr-4 pb-2 whitespace-nowrap ">
            Don’t Miss
          </p>
          {/* <div className="flex items-center justify-evenly gap-4">
            <div className="px-5 my-2 rounded-2xl text-white font-oswald py-0.5 bg-[#F65050]">
              All
            </div>
            <div className="px-5 my-2 rounded-2xl text-white font-oswald py-0.5 bg-[#11580f]">
              Funding
            </div>
            <div className="px-5 my-2 rounded-2xl text-white font-oswald py-0.5 bg-[#6950f6]">
              Global
            </div>
            <div className="px-5 my-2 rounded-2xl text-white font-oswald py-0.5 bg-[#f65082]">
              MP
            </div>
            <div className="px-5 my-2 rounded-2xl text-white font-oswald py-0.5 bg-[#f150f6]">
              Program
            </div>
            <div className="px-5 my-2 rounded-2xl text-white font-oswald py-0.5 bg-[#f6a950]">
              All
            </div>
          </div> */}
        </div>
        <div className="hidden lg:flex basis-1/4 w-full font-oswald font-medium text-base items-center justify-evenly">
          <p className="border-b border-black w-full py-2">Recent</p>
        </div>
      </div>
      <div className="flex justify-center lg:justify-between gap-6 my-5">
        <div className="flex basis-[95%] h-[25rem] relative lg:basis-[70%]  gap-6">
          <div
            className="flex flex-col sm:basis-3/5 cursor-pointer"
            onClick={() => navigate(`/post/${post[7]._id}`)}
          >
            <img
              src={post[7].thumbnail}
              alt=""
              className="h-[70%] aspect-[2.0]"
            />
            <div className="block h-[30%]">
              <p className="text-xs text-gray-600 font-medium px-1 py-2">
                {post[7].creator} -{" "}
                {format(new Date(post[7].isoDate), "yyyy-MM-dd")}
              </p>{" "}
              <p className="text-lg text-left font-oswald px-2  font-semibold line-clamp-2">
                {post[7]?.title}
              </p>
              <p className="text-sm text-gray-600 my-1.5 text-left px-2  line-clamp-2">
                {post[7]?.contentSnippet}
              </p>
            </div>
          </div>
          <div className=" flex-col overflow-auto scrollbar-hide h-11/12 hidden sm:flex basis-2/5">
            {post.slice(8).map((x) => {
              return (
                <div
                  className="flex justify-between gap-4 my-2 cursor-pointer"
                  onClick={() => navigate(`/post/${x._id}`)}
                >
                  <img src={x.thumbnail} alt="" className="h-24 w-32" />
                  <div className="block basis-3/4">
                    <p className="text-lg text-left font-oswald px-1  font-semibold line-clamp-2">
                      {x.title}
                    </p>
                    <p className="text-xs text-gray-600 font-medium px-1 py-1">
                      {x?.creator} - {format(new Date(x.isoDate), "yyyy-MM-dd")}
                    </p>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{ maxHeight: `50vh` }}
          className="flex-col relative basis-1/4  overflow-scroll scrollbar-hide hidden lg:flex  ml-auto"
        >
          {recent &&
            Array.isArray(recent) &&
            recent.map((x) => (
              <div className="flex justify-between gap-4 my-2 p-1 cursor-pointer"
              onClick={() => navigate(`/post/${x._id}`)}
              >
                <img src={x.thumbnail} alt="" className="h-24 w-28" />
                <div className="block">
                  <p className=" text-left font-oswald px-0.5  font-semibold line-clamp-3">
                    {x.title}
                  </p>
                  <p className="text-xs text-gray-600 font-medium px-0.5 py-1.5">
                    {x.creator} - {format(new Date(x.isoDate), "yyyy-MM-dd")}{" "}
                  </p>{" "}
                </div>
              </div>
            ))}
        </div>{" "}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default HotTopic;
