import React, { useEffect, useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import PhotoImg from "../../assets/photo.jpg";
import { getPostByCategories } from "../../redux/action/post_action";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const CarouselNews = ({ posts }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const increment = () => {
    if (index < posts.length) {
      const val = index + 1;
      setIndex(val);
      console.log(index);
    } else {
      setIndex(0);
    }
    console.log(posts[index]?.thumbnail);
  };
  const decrement = () => {
    if (index > 0) {
      const val = index - 1;

      setIndex(val);
    } else {
      setIndex(posts.length - 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between border-b border-black items-center">
        <h1 className=" text-[#F65050]  text-2xl font-semibold font-oswald pb-2">
          Funding
        </h1>
        <div className="flex gap-4">
          <div
            className="bg-[#F65050] h-8 w-8 cursor-pointer hover:scale-110"
            onClick={decrement}
          >
            <RiArrowDropLeftLine className="text-white" size={32} />
          </div>
          <div
            className="bg-[#F65050] h-8 w-8 cursor-pointer hover:scale-110"
            onClick={increment}
          >
            <RiArrowDropRightLine className="text-white" size={32} />
          </div>
        </div>
      </div>
      {posts ? (
        <div
          className="h-[30rem] bg-center bg-no-repeat  bg-cover my-4 flex flex-col justify-end bg-gray-300 bg-blend-multiply transition-all duration-300 ease-in-out"
          style={{ backgroundImage: `url(${posts[index]?.thumbnail})` }}
          onClick={() => navigate(`/post/${posts[index]?._id}`)}
        >
          <p className="align-bottom px-8 text-3xl pb-4 text-white font-oswald font-bold line-clamp-2 ">
            {posts[index]?.title}
          </p>
          <p className="align-bottom   mb-12 pt-3 mx-8 text-xl text-gray-200 font-oswald  line-clamp-2 ">
            {posts[index]?.contentSnippet}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div className="w-full flex">
        <div className="flex basis-full overflow-auto scrollbar-hide justify-between gap-4 relative items-center my-5">
          {posts &&
            posts.slice(1).map((x) => {
              return (
                <div
                  className="flex flex-nowrap w-96 px-4 justify-between gap-4  cursor-pointer"
                  onClick={() => navigate(`/post/${x._id}`)}
                >
                  <img
                    src={x.thumbnail}
                    alt=""
                    className="h-24 w-28 rounded-md shadow-lg object-cover"
                  />
                  <div className="block w-64">
                    <p className="text-lg text-left font-oswald px-1  font-semibold line-clamp-3">
                      {x.title}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CarouselNews;
