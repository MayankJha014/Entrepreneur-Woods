import React from "react";
import { useNavigate } from "react-router-dom";

const SecondHeader = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="h-[25rem] md:h-[28rem] w-full p-4 overflow-scroll scrollbar-hide ">
        <div className="flex h-full gap-4 w-fit">
          {post &&
            post.map((x, index) => (
              <div
                className=" w-72 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
                style={{ backgroundImage: `url(${x.thumbnail})` }}
                onClick={() => navigate(`/post/${x._id}`)}
                index={index}
              >
                <p className="text-sm text-gray-100 px-1 py-2">{x.title}</p>
                <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
                  {x.contentSnippet}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
