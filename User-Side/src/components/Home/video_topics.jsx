import React, { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const VideoNews = () => {
  let [index, setIndex] = useState(0);

  const increment = () => {
    if (index < NEWSCAROUSEL.length) {
      setIndex(index++);
    } else {
      setIndex(0);
    }
  };
  const decrement = () => {
    if (index > 0) {
      setIndex(--index);
    } else {
      setIndex(NEWSCAROUSEL.length - 1);
    }
  };

  const fistData =
    "https://images.unsplash.com/photo-1550173071-5e3b89c2cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const secondData =
    "https://images.unsplash.com/photo-1578824964521-4b8ecb254c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  const thirdData =
    "https://images.unsplash.com/photo-1572803090936-72796aef96a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80";
  const forthData =
    "https://images.unsplash.com/photo-1575476445152-d6a38db3506a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";

  const NEWSCAROUSEL = [
    {
      image: fistData,
      title: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
      description:
        "Hollywood actress Amanda Seyfried has recalled the time whenshe became obsessed with ghost stories",
    },
    {
      image: secondData,
      title: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
      description:
        "Hollywood actress Amanda Seyfried has recalled the time whenshe became obsessed with ghost stories ",
    },
    {
      image: thirdData,
      title: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
      description:
        "Hollywood actress Amanda Seyfried has recalled the time whenshe became obsessed with ghost stories",
    },
    {
      image: forthData,
      title: "Amanda Seyfried became ‘really obsessed’ with ghost stories",
      description:
        "Hollywood actress Amanda Seyfried has recalled the time whenshe became obsessed with ghost stories",
    },
  ];

  const videoData = "https://www.youtube.com/embed/qEVUtrk8_B4";
  return (
    <div>
      <div className="flex justify-between border-b border-black items-center">
        <h1 className=" text-[#F65050]  text-2xl font-semibold font-oswald pb-2">
          Video
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
      <div
        className="h-[30rem] relative my-4 flex flex-col justify-end bg-gray-300 bg-blend-multiply transition-all duration-300 ease-in-out"
        // style={{ backgroundImage: `url(${NEWSCAROUSEL[index].image})` }}
      >
        <iframe
          className="absolute w-full h-full fadeIn animated z-10"
          src={videoData}
          title="John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          allowTransparency="true"
        ></iframe>
        {/* <video controls className="absolute w-full h-full fadeIn animated z-10">
          <source
            src="https://www.f5.com/content/dam/f5-labs-v2/media-files/video/Happy%20Cow.mp4"
            type="video/mp4"
          />
        </video> */}
        <p className="align-bottom mx-8 text-3xl z-20 mb-4 text-white font-oswald font-bold line-clamp-2 ">
          {NEWSCAROUSEL[index].title}
        </p>
        <p className="align-bottom z-20   mb-12 mt-3 mx-8 text-xl text-gray-200 font-oswald  line-clamp-2 ">
          {NEWSCAROUSEL[index].description}
        </p>
      </div>
      <div className="w-full flex pb-10">
        <div className="flex basis-full overflow-auto scrollbar-hide justify-between  relative items-center my-5">
          <div className="flex flex-col flex-nowrap w-72 h-fit px-2 justify-between gap-2  ">
            <iframe
              className="w-4/5 h-28 fadeIn animated z-10 object-cover"
              src={videoData}
              title="John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              allowTransparency="true"
            ></iframe>{" "}
            <div className="block w-44 mr-4">
              <p className="text-xs text-gray-600 font-medium px-1 py-2">
                Craig Bator - 27 Dec 2020
              </p>{" "}
              <p className="text-lg text-left font-oswald px-1  font-semibold line-clamp-2">
                Now Is the Time to Think About Your Small Business Success Now
                Is the Time to Think About Your Small Business Success
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap w-72 h-fit px-2 justify-between gap-2  ">
            <iframe
              className="w-4/5 h-28 fadeIn animated z-10 object-cover"
              src={videoData}
              title="John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              allowTransparency="true"
            ></iframe>{" "}
            <div className="block w-44 mr-4">
              <p className="text-xs text-gray-600 font-medium px-1 py-2">
                Craig Bator - 27 Dec 2020
              </p>{" "}
              <p className="text-lg text-left font-oswald px-1  font-semibold line-clamp-2">
                Now Is the Time to Think About Your Small Business Success Now
                Is the Time to Think About Your Small Business Success
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap w-72 h-fit px-2 justify-between gap-2  ">
            <iframe
              className="w-4/5 h-28 fadeIn animated z-10 object-cover"
              src={videoData}
              title="John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              allowTransparency="true"
            ></iframe>{" "}
            <div className="block w-44 mr-4">
              <p className="text-xs text-gray-600 font-medium px-1 py-2">
                Craig Bator - 27 Dec 2020
              </p>{" "}
              <p className="text-lg text-left font-oswald px-1  font-semibold line-clamp-2">
                Now Is the Time to Think About Your Small Business Success Now
                Is the Time to Think About Your Small Business Success
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap w-72 h-fit px-2 justify-between gap-2  ">
            <iframe
              className="w-4/5 h-28 fadeIn animated z-10 object-cover"
              src={videoData}
              title="John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              allowTransparency="true"
            ></iframe>{" "}
            <div className="block w-44 mr-4">
              <p className="text-xs text-gray-600 font-medium px-1 py-2">
                Craig Bator - 27 Dec 2020
              </p>{" "}
              <p className="text-lg text-left font-oswald px-1  font-semibold line-clamp-2">
                Now Is the Time to Think About Your Small Business Success Now
                Is the Time to Think About Your Small Business Success
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-nowrap w-72 h-fit px-2 justify-between gap-2  ">
            <iframe
              className="w-4/5 h-28 fadeIn animated z-10 object-cover"
              src={videoData}
              title="John Wick: Chapter 4 (2023 Movie) Official Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              allowTransparency="true"
            ></iframe>{" "}
            <div className="block w-44 mr-4">
              <p className="text-xs text-gray-600 font-medium px-1 py-2">
                Craig Bator - 27 Dec 2020
              </p>{" "}
              <p className="text-lg text-left font-oswald px-1  font-semibold line-clamp-2">
                Now Is the Time to Think About Your Small Business Success Now
                Is the Time to Think About Your Small Business Success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoNews;
