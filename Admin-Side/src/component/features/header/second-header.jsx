import React from "react";

const SecondHeader = () => {
  const fistData =
    "https://images.unsplash.com/photo-1618042164219-62c820f10723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  const newsList = [
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
    },
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
    },
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
    },
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
    },
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
    },
  ];

  return (
    <div>
      <div className="h-[25rem] md:h-[28rem] p-4 overflow-hidden ">
        <div className="flex h-full gap-4 w-fit">
          {newsList.map((x, index) => (
            <div
              className=" basis-1/2 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
              style={{ backgroundImage: `url(${fistData})` }}
              index={index}
            >
              <p className="text-sm text-gray-100 px-1 py-2">{x.title}</p>
              <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
                {x.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
