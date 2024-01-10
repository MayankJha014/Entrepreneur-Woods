import React, { useRef } from "react";
import { useState } from "react";
import PlayButton from "../../assets/play.png";
// import playing from "../../assets/play.gif";
import PauseButton from "../../assets/pause.png";

const PodCastNews = () => {
  const fistData =
    "https://images.unsplash.com/photo-1618042164219-62c820f10723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  // const audio = new Audio(
  //   "https://www.pagalworld.com.se/files/download/id/64630"
  // );
  const myRef = useRef();

  let [play, setPlay] = useState(false);

  myRef.onended = function () {
    setPlay(false);
  };

  let playAudio = async () => {
    if (play) {
      myRef.current.pause();
      setPlay(false);
    } else {
      myRef.current.play();
      return setPlay(true);
    }
  };
  return (
    <div className="py-5">
      <div className="flex justify-center my-5 lg:justify-between gap-6">
        <div className="flex basis-full overflow-auto scrollbar-hide items-center justify-between border-b  border-black/50 ">
          <p className="text-[#F65050]  font-oswald font-medium text-2xl pr-4 pb-2 whitespace-nowrap ">
            Podcast
          </p>
        </div>
      </div>
      <div className="flex h-[25rem] py-5 overflow-scroll scrollbar-hide">
        <div
          className="w-72 mx-4 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
          style={{ backgroundImage: `url(${fistData})` }}
        >
          <p className="text-sm text-gray-100 px-1 py-2">
            Craig Bator - 27 Dec 2020
          </p>
          <div className="flex">
            <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <div className="w-56 my-auto">
              <audio
                ref={myRef}
                src="https://www.pagalworld.com.se/files/download/id/64630"
              ></audio>
              {play ? (
                <img
                  src={PauseButton}
                  alt=""
                  onClick={() => {
                    playAudio();
                  }}
                />
              ) : (
                <img src={PlayButton} alt="" onClick={() => playAudio()} />
              )}
            </div>
          </div>
        </div>{" "}
        <div
          className="w-72 mx-4 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
          style={{ backgroundImage: `url(${fistData})` }}
        >
          <p className="text-sm text-gray-100 px-1 py-2">
            Craig Bator - 27 Dec 2020
          </p>
          <div className="flex">
            <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <div className="w-56 my-auto">
              <audio
                ref={myRef}
                src="https://www.pagalworld.com.se/files/download/id/64630"
              ></audio>
              {play ? (
                <img
                  src={PauseButton}
                  alt=""
                  onClick={() => {
                    playAudio();
                  }}
                />
              ) : (
                <img src={PlayButton} alt="" onClick={() => playAudio()} />
              )}
            </div>
          </div>
        </div>{" "}
        <div
          className="w-72 mx-4 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
          style={{ backgroundImage: `url(${fistData})` }}
        >
          <p className="text-sm text-gray-100 px-1 py-2">
            Craig Bator - 27 Dec 2020
          </p>
          <div className="flex">
            <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <div className="w-56 my-auto">
              <audio
                ref={myRef}
                src="https://www.pagalworld.com.se/files/download/id/64630"
              ></audio>
              {play ? (
                <img
                  src={PauseButton}
                  alt=""
                  onClick={() => {
                    playAudio();
                  }}
                />
              ) : (
                <img src={PlayButton} alt="" onClick={() => playAudio()} />
              )}
            </div>
          </div>
        </div>{" "}
        <div
          className="w-72 mx-4 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
          style={{ backgroundImage: `url(${fistData})` }}
        >
          <p className="text-sm text-gray-100 px-1 py-2">
            Craig Bator - 27 Dec 2020
          </p>
          <div className="flex">
            <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <div className="w-56 my-auto">
              <audio
                ref={myRef}
                src="https://www.pagalworld.com.se/files/download/id/64630"
              ></audio>
              {play ? (
                <img
                  src={PauseButton}
                  alt=""
                  onClick={() => {
                    playAudio();
                  }}
                />
              ) : (
                <img src={PlayButton} alt="" onClick={() => playAudio()} />
              )}
            </div>
          </div>
        </div>{" "}
        <div
          className="w-72 mx-4 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
          style={{ backgroundImage: `url(${fistData})` }}
        >
          <p className="text-sm text-gray-100 px-1 py-2">
            Craig Bator - 27 Dec 2020
          </p>
          <div className="flex">
            <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <div className="w-56 my-auto">
              <audio
                ref={myRef}
                src="https://www.pagalworld.com.se/files/download/id/64630"
              ></audio>
              {play ? (
                <img
                  src={PauseButton}
                  alt=""
                  onClick={() => {
                    playAudio();
                  }}
                />
              ) : (
                <img src={PlayButton} alt="" onClick={() => playAudio()} />
              )}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default PodCastNews;
