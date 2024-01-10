import { format } from "date-fns";
import React from "react";
import { useNavigate } from "react-router-dom";

const ForthHeader = ({ post }) => {
  const navigate = useNavigate();
  return (
    <>
      {post ? (
        <div>
          <div className="h-[14rem] w-full px-8 pt-4 lg:px-0 bg-white hidden sm:flex gap-3">
            <div
              className=" flex flex-col justify-end cursor-pointer py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-[1.03] hover:z-10 transition-all duration-700 bg-blend-multiply "
              style={{ backgroundImage: `url(${post[0]?.thumbnail})` }}
              onClick={() => navigate(`/post/${post[0]._id}`)}
            >
              <p className="text-sm text-gray-100 px-1 py-2">
                {post[0]?.creator} -{" "}
                {format(new Date(post[0].isoDate), "yyyy-MM-dd")}{" "}
              </p>
              <p className="align-bottom text-2xl text-white font-oswald font-bold line-clamp-2 w-2/5">
                {post[0]?.contentSnippet}
              </p>
            </div>
          </div>
          <div className="h-[22rem] w-full px-8 py-1 lg:px-0 bg-white hidden sm:flex gap-3 my-2">
            <div
              className="basis-1/2 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-[1.03] ForthHeader hover:z-10 transition-all duration-700 bg-blend-multiply "
              style={{ backgroundImage: `url(${post[1]?.thumbnail})` }}
              onClick={() => navigate(`/post/${post[1]._id}`)}
            >
              <p className="text-sm text-gray-100 px-1 py-2">
                {post[1]?.creator} -{" "}
                {format(new Date(post[1].isoDate), "yyyy-MM-dd")}{" "}
              </p>
              <p className="align-bottom text-2xl text-white font-oswald font-bold line-clamp-2 ">
                {post[1]?.contentSnippet}
              </p>
            </div>
            <div className="flex flex-col h-full basis-1/2  ">
              <div className="flex h-full gap-3 py-1">
                <div
                  className="flex flex-col basis-1/2 justify-end py-3 px-4 ForthHeader relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 hover:z-10 transition-all duration-700 bg-blend-multiply "
                  style={{ backgroundImage: `url(${post[2]?.thumbnail})` }}
                  onClick={() => navigate(`/post/${post[2]._id}`)}
                >
                  <p className="text-xs text-gray-100 px-1 py-2">
                    {post[2]?.creator} -{" "}
                    {format(new Date(post[2].isoDate), "yyyy-MM-dd")}{" "}
                  </p>
                  <p className="align-bottom text-lg text-white font-oswald font-bold line-clamp-2 ">
                    {post[2]?.contentSnippet}
                  </p>
                </div>
                <div
                  className="flex flex-col basis-1/2 justify-end py-3 px-4 ForthHeader relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 hover:z-10 transition-all duration-700 bg-blend-multiply "
                  style={{ backgroundImage: `url(${post[3]?.thumbnail})` }}
                  onClick={() => navigate(`/post/${post[3]._id}`)}
                >
                  <p className="text-xs text-gray-100 px-1 py-2">
                    {post[3]?.creator} -{" "}
                    {format(new Date(post[3].isoDate), "yyyy-MM-dd")}{" "}
                  </p>
                  <p className="align-bottom text-lg text-white font-oswald font-bold line-clamp-2 ">
                    {post[3]?.contentSnippet}
                  </p>
                </div>
              </div>
              <div className="flex h-full gap-3 py-1">
                <div
                  className="flex flex-col basis-1/2 justify-end py-3 px-4 ForthHeader relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 hover:z-10 transition-all duration-700 bg-blend-multiply "
                  style={{ backgroundImage: `url(${post[4]?.thumbnail})` }}
                  onClick={() => navigate(`/post/${post[4]._id}`)}
                >
                  <p className="text-xs text-gray-100 px-1 py-2">
                    {post[4]?.creator} -{" "}
                    {format(new Date(post[4].isoDate), "yyyy-MM-dd")}{" "}
                  </p>
                  <p className="align-bottom text-lg text-white font-oswald font-bold line-clamp-2 ">
                    {post[4]?.contentSnippet}
                  </p>
                </div>
                <div
                  className="flex flex-col basis-1/2 justify-end py-3 px-4 ForthHeader relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 hover:z-10 transition-all duration-700 bg-blend-multiply "
                  style={{ backgroundImage: `url(${post[5]?.contentSnippet})` }}
                  onClick={() => navigate(`/post/${post[5]._id}`)}

                >
                  <p className="text-xs text-gray-100 px-1 py-2">
                    
                    {post[5]?.creator} -{" "}
                    {format(new Date(post[5].isoDate), "yyyy-MM-dd")}{" "}
                  </p>
                  <p className="align-bottom text-lg text-white font-oswald font-bold line-clamp-2 ">
                    {post[5]?.contentSnippet}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[28rem] sm:hidden flex flex-nowrap w-full p-4 overflow-scroll scrollbar-hide gap-4">
            {post &&
              post.map((x, index) => (
                <div
                  className=" basis-72 min-w-[20rem] flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 ForthHeader hover:z-10 transition-all duration-700 bg-blend-multiply "
                  style={{ backgroundImage: `url(${x.image})` }}
                  onClick={() => navigate(`/post/${x._id}`)}

                >
                  <p className="text-sm text-gray-100 px-1 py-2">{x.title}</p>
                  <p className="align-bottom text-2xl text-white font-oswald font-bold line-clamp-2 ">
                    {x.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ForthHeader;
