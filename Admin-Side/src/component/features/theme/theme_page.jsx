import React, { useEffect, useState } from "react";
import UserNavbar from "./user_navbar";
import Logo from "../../../assets/Logo.png";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import Accrobian from "../../accrobian";
import FirstHeader from "../header/first-header";
import { HeaderSwitch } from "./page_switch";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { storage } from "../../firebase";
import {
  addAdsLogo,
  addNavLogo,
  createNavComp,
  deleteNavComp,
  getHomeDetail,
  updateAdsLogo,
  updateNavLogo,
} from "../../../redux/action/nav";
import Dailog from "../../dailog";
import { getAllCategories } from "../../../redux/action/post";

const ThemePage = () => {
  const [headerUi, setHeaderUi] = useState({
    logo: "",
    adsImage: "",
    navPosition: "",
  });
  const { isMessage, home, isError } = useSelector((state) => state.home);

  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  const [formData, setFormData] = useState();
  const [category, setCategory] = useState();
  const [selectedCat, setSelectedCat] = useState([]);

  const getAllCat = async () => {
    const data = await getAllCategories();
    setCategory(data);
  };

  useEffect(() => {
    setFormData({ ...formData, ["category"]: selectedCat });
  }, [selectedCat]);

  useEffect(() => {
    console.log(home);
  }, [home]);

  useEffect(() => {
    getAllCat();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const logoimageChange = () => {
    const inputImage = document.createElement("input");
    inputImage.setAttribute("type", "file");
    inputImage.setAttribute("accept", "image/*");
    inputImage.setAttribute("name", "logo");
    inputImage.click();

    inputImage.onchange = async (e) => {
      const file = inputImage.files[0];

      setHeaderUi({ ...headerUi, logo: URL.createObjectURL(file) });
    };
  };

  const adsimageChange = () => {
    const inputImage = document.createElement("input");
    inputImage.setAttribute("type", "file");
    inputImage.setAttribute("accept", "image/*");
    inputImage.setAttribute("name", "adsImage");
    inputImage.click();

    inputImage.onchange = async (e) => {
      const file = inputImage.files[0];

      setHeaderUi({ ...headerUi, adsImage: URL.createObjectURL(file) });
    };
  };

  const [view, setView] = useState(false);
  const [navbarIndex, setNavbarIndex] = useState([
    {
      title: "Home",
      Path: "/",
    },
    {
      title: "Educational",
      Path: "/education",
    },
    {
      title: "Business",
      Path: "/business",
    },
    {
      title: "Entrepreneur",
      Path: "/entrepreneur",
    },
    {
      title: "Startup",
      Path: "/startup",
    },
  ]);

  useEffect(() => {
    if (isMessage) {
      toast.success(isMessage);
    }
  }, [isMessage]);

  useEffect(() => {
    if (isError) {
      toast.success(isError);
    }
  }, [isError]);

  const handleSort = () => {
    let navIndex = [...navbarIndex];

    const draggableItemContent = navIndex.splice(dragItem.current, 1)[0];

    navIndex.splice(dragOverItem.current, 0, draggableItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setNavbarIndex(navIndex);
  };

  const dispatch = useDispatch();

  const onDragEnd = (e, index) => {
    console.log("Drag End", index);
  };

  const upload = async (image) => {
    if (image == null) return;
    const imageRef = storage.ref(`/home/nav-logo/${image.name}`);

    const snapshot = await imageRef.put(image);
    // Image uploaded successfully, now get the download URL
    const downloadURL = await snapshot.ref.getDownloadURL();
    return downloadURL;
  };

  const handleNavLogo = async (e) => {
    const downloadURL = await upload(e.target.files[0]);
    console.log(downloadURL);
    dispatch(updateNavLogo(downloadURL));
    dispatch(getHomeDetail());
  };

  const handleAdsLogo = async (e) => {
    const downloadURL = await upload(e.target.files[0]);
    console.log(downloadURL);
    dispatch(updateAdsLogo(downloadURL));
    dispatch(getHomeDetail());
  };

  return (
    <>
      <div>
        <div className="flex w-full h-screen overflow-hidden">
          <div className="w-full bg-gray-200 min-h-full md:w-[25rem] min-w-max shadow-xl">
            <Accrobian heading="Header" height="37rem">
              <div className="p-2">
                <div className="grid grid-cols-3 gap-5 text-base  relative font-semibold items-center">
                  <p>Logo: </p>
                  {home?.navLogo == undefined ? (
                    <input
                      type="file"
                      name=""
                      id=""
                      className="col-span-2"
                      onChange={handleNavLogo}
                    />
                  ) : (
                    <div className="my-2 h-20 col-span-2 border-2 shadow-lg rounded-lg border-black/50 bg-white relative">
                      <img
                        src={home?.navLogo}
                        alt=""
                        className="h-16 w-48 object-contain"
                      />
                      <div>
                        {/* <AiOutlineEdit
                          className="absolute bottom-2 right-0 bg-white shadow-xl hover:bg-black hover:text-white rounded-full p-1"
                          size={30}
                          onClick={logoimageChange}
                        /> */}
                        <MdDeleteOutline
                          className="absolute top-1 right-0 bg-white shadow-xl hover:bg-black hover:text-white rounded-full p-1"
                          size={30}
                          onClick={() => {
                            storage.refFromURL(home?.navLogo).delete();
                            dispatch(updateNavLogo());
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <p>Ads: </p>
                  {home?.adsLogo == undefined ? (
                    <input
                      type="file"
                      name=""
                      id=""
                      className="col-span-2"
                      onChange={handleAdsLogo}
                    />
                  ) : (
                    <div className="my-2 h-20 col-span-2 border-2 shadow-lg rounded-lg border-black/50 bg-white relative">
                      <img
                        src={home?.adsLogo}
                        alt=""
                        className="h-16 w-48 object-contain"
                      />
                      <div>
                        {/* <AiOutlineEdit
                          className="absolute bottom-2 right-0 bg-white shadow-xl hover:bg-black hover:text-white rounded-full p-1"
                          size={30}
                          onClick={logoimageChange}
                        /> */}
                        <MdDeleteOutline
                          className="absolute top-1 right-0 bg-white shadow-xl hover:bg-black hover:text-white rounded-full p-1"
                          size={30}
                          onClick={() => {
                            storage.refFromURL(home?.adsLogo).delete();
                            dispatch(updateAdsLogo());
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <p className="col-span-3">Navbar</p>
                  <div className="w-4/5  border-2 col-span-3 mx-auto">
                    {home?.navabar &&
                      home?.navabar.map((x, index) => (
                        <div
                          className="flex justify-between m-1  rounded-full p-2 bg-purple-300 nav-item"
                          key={index}
                        >
                          <div className=" px-4">{x.title}</div>
                          <div className="flex gap-1">
                            {/* <AiOutlineEdit
                              size={22}
                              className="bg-white shadow-xl hover:bg-black hover:text-white rounded-full w-6 h-6 p-1"
                            /> */}
                            <MdDeleteOutline
                              size={22}
                              className="bg-white shadow-xl hover:bg-black hover:text-white rounded-full w-6 h-6 p-1"
                              onClick={() => {
                                dispatch(deleteNavComp(x._id));
                                dispatch(getHomeDetail());
                              }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  <div
                    onClick={() => setView(!view)}
                    className="bg-red-500 px-4 py-2 mx-auto col-span-3 text-white w-fit rounded-md"
                  >
                    Add Navbar
                  </div>
                </div>
              </div>
            </Accrobian>{" "}
          </div>
          <div className="hidden md:basis-2/3 md:block ">
            <div className="w-full scale-75 overflow-auto">
              <UserNavbar headerUi={headerUi} navItem={navbarIndex} />
              {HeaderSwitch(headerUi.homeHeader)}
            </div>
          </div>
        </div>
      </div>
      <Dailog
        open={view}
        setOpen={setView}
        width="sm:w-[50%] w-[95%]"
        dialogText={"Navbar Detail"}
      >
        <div className="flex flex-col gap-4">
          <div className="w-11/12 flex">
            <label
              for="title"
              class="block my-3 w-20 mx-4 text-base font-medium text-gray-900"
            >
              Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-100 border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 "
              placeholder="Post title name..."
              onChange={handleInputChange}
            />
          </div>
          <div className="w-11/12 flex">
            <label
              for="link"
              class="block my-3 mx-4 w-20 text-base font-medium text-gray-900"
            >
              Link
            </label>
            <input
              type="text"
              id="title"
              name="link"
              className="bg-gray-100 border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 "
              placeholder="/"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-11/12 flex">
            <label
              for="header"
              class="block my-3 mx-4 w-20 text-base font-medium text-gray-900"
            >
              Carousel
            </label>
            <select
              name="header"
              onChange={handleInputChange}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="w-11/12 flex">
            <label
              for="title"
              class="block my-3 mx-4 w-20 text-base font-medium text-gray-900"
            >
              Category
            </label>
            <div className="flex flex-wrap gap-4 border-2 p-4 w-3/4 border-black bg-slate-200">
              {selectedCat &&
                selectedCat.map((x) => {
                  return (
                    <div
                      className="bg-slate-400 px-3 py-1 rounded-lg"
                      onClick={() => {
                        setSelectedCat(selectedCat.filter((cat) => cat !== x));
                      }}
                    >
                      {x}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-wrap gap-4 w-[82%] ml-auto">
            {category &&
              category.map((x) => {
                return (
                  <div
                    className="bg-slate-400 px-3 py-1 rounded-lg"
                    onClick={() => {
                      setSelectedCat([...selectedCat, x]);
                    }}
                  >
                    {x}
                  </div>
                );
              })}
          </div>
          <div
            onClick={() => {
              dispatch(createNavComp(formData));
              dispatch(getHomeDetail());
            }}
            className="bg-red-400 px-5 py-2 cursor-pointer rounded-lg w-fit text-white font-poppins font-semibold  m-auto"
          >
            Submit
          </div>
        </div>
      </Dailog>
    </>
  );
};

export default ThemePage;
