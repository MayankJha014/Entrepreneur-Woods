import React from "react";

const ThirdHeader = () => {
  const fistData =
    "https://images.unsplash.com/photo-1618042164219-62c820f10723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  const secondData =
    "https://images.unsplash.com/photo-1571215682742-561893604b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvd25sb2Fkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  const thirdData =
    "https://images.unsplash.com/photo-1582391988484-3f1691bc1401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvd25sb2Fkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  const forthData =
    "https://images.unsplash.com/photo-1626847037657-fd3622613ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  const newsList = [
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
      image:
        "https://images.unsplash.com/photo-1618042164219-62c820f10723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
      image:
        "https://images.unsplash.com/photo-1571215682742-561893604b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvd25sb2Fkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
      image:
        "https://images.unsplash.com/photo-1582391988484-3f1691bc1401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvd25sb2Fkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Craig Bator - 27 Dec 2020",
      description:
        " After all is said and done, more is done Lorem ipsum dolor sit",
      image:
        "https://images.unsplash.com/photo-1582391988484-3f1691bc1401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvd25sb2Fkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div>
      <div className="h-[32rem] w-full px-4 lg:px-0 bg-white hidden sm:flex gap-3 my-4">
        <div className="flex flex-col h-full basis-2/5 gap-3 ">
          <div
            className="flex flex-col basis-1/2 justify-end py-3 px-4 rounded-lg relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 hover:z-10 transition-all duration-700 bg-blend-multiply "
            style={{ backgroundImage: `url(${secondData})` }}
          >
            <p className="text-xs text-gray-100 px-1 py-2">
              Craig Bator - 27 Dec 2020
            </p>
            <p className="align-bottom text-lg text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Explicabo veniam minima,
              deserunt inventore doloribus saepe incidunt sunt magni, repellat,
              impedit sequi perferendis quos! Quod, temporibus dolores! Sit
              distinctio ullam dicta vel tempora amet unde dolores dolore optio
              dolorum animi totam rem, quasi aliquid voluptates deleniti
              blanditiis voluptatibus molestiae. Optio expedita fugit error
              perferendis laboriosam, tempora voluptatibus.
            </p>
          </div>
          <div
            className="flex flex-col basis-1/2 justify-end py-3 px-4 rounded-lg relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 hover:z-10 transition-all duration-700 bg-blend-multiply "
            style={{ backgroundImage: `url(${thirdData})` }}
          >
            <p className="text-xs text-gray-100 px-1 py-2">
              Craig Bator - 27 Dec 2020
            </p>
            <p className="align-bottom text-lg text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Explicabo veniam minima,
              deserunt inventore doloribus saepe incidunt sunt magni, repellat,
              impedit sequi perferendis quos! Quod, temporibus dolores! Sit
              distinctio ullam dicta vel tempora amet unde dolores dolore optio
              dolorum animi totam rem, quasi aliquid voluptates deleniti
              blanditiis voluptatibus molestiae. Optio expedita fugit error
              perferendis laboriosam, tempora voluptatibus.
            </p>
          </div>
        </div>
        <div
          className="basis-3/5 flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
          style={{ backgroundImage: `url(${fistData})` }}
        >
          <p className="text-sm text-gray-100 px-1 py-2">
            Craig Bator - 27 Dec 2020
          </p>
          <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
            After all is said and done, more is done Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Explicabo veniam minima, deserunt
            inventore doloribus saepe incidunt sunt magni, repellat, impedit
            sequi perferendis quos! Quod, temporibus dolores! Sit distinctio
            ullam dicta vel tempora amet unde dolores dolore optio dolorum animi
            totam rem, quasi aliquid voluptates deleniti blanditiis voluptatibus
            molestiae. Optio expedita fugit error perferendis laboriosam,
            tempora voluptatibus.
          </p>
        </div>
        <div className="flex flex-col h-full basis-2/5 gap-3 ">
          <div
            className="flex flex-col basis-1/2 justify-end py-3 px-4 rounded-lg relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 hover:z-10 transition-all duration-700 bg-blend-multiply "
            style={{ backgroundImage: `url(${forthData})` }}
          >
            <p className="text-xs text-gray-100 px-1 py-2">
              Craig Bator - 27 Dec 2020
            </p>
            <p className="align-bottom text-lg text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Explicabo veniam minima,
              deserunt inventore doloribus saepe incidunt sunt magni, repellat,
              impedit sequi perferendis quos! Quod, temporibus dolores! Sit
              distinctio ullam dicta vel tempora amet unde dolores dolore optio
              dolorum animi totam rem, quasi aliquid voluptates deleniti
              blanditiis voluptatibus molestiae. Optio expedita fugit error
              perferendis laboriosam, tempora voluptatibus.
            </p>
          </div>
          <div
            className="flex flex-col basis-1/2 justify-end py-3 px-4 rounded-lg relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 hover:z-10 transition-all duration-700 bg-blend-multiply "
            style={{ backgroundImage: `url(${secondData})` }}
          >
            <p className="text-xs text-gray-100 px-1 py-2">
              Craig Bator - 27 Dec 2020
            </p>
            <p className="align-bottom text-lg text-white font-oswald font-bold line-clamp-2 ">
              After all is said and done, more is done Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Explicabo veniam minima,
              deserunt inventore doloribus saepe incidunt sunt magni, repellat,
              impedit sequi perferendis quos! Quod, temporibus dolores! Sit
              distinctio ullam dicta vel tempora amet unde dolores dolore optio
              dolorum animi totam rem, quasi aliquid voluptates deleniti
              blanditiis voluptatibus molestiae. Optio expedita fugit error
              perferendis laboriosam, tempora voluptatibus.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[28rem] sm:hidden flex flex-nowrap w-full p-4 overflow-scroll scrollbar-hide gap-4">
        {newsList.map((x, index) => (
          <div
            className=" basis-72 min-w-[20rem] flex flex-col justify-end py-12 px-4 relative bg-no-repeat bg-cover bg-center bg-gray-400 hover:bg-transparent hover:scale-105 rounded-lg hover:z-10 transition-all duration-700 bg-blend-multiply "
            style={{ backgroundImage: `url(${x.image})` }}
          >
            <p className="text-sm text-gray-100 px-1 py-2">{x.title}</p>
            <p className="align-bottom text-3xl text-white font-oswald font-bold line-clamp-2 ">
              {x.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdHeader;
