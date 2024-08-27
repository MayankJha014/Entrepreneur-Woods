import React, { useEffect, useMemo, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { storage } from "../../firebase";
import userEvent from "@testing-library/user-event";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import {
  creatPost,
  getCreatorPostById,
  updatePost,
} from "../../../redux/action/post";
import {
  clearError,
  clearMessage,
  clearPosts,
} from "../../../redux/slice/post";
import { useParams } from "react-router-dom";

const CreatePosts = () => {
  const { id } = useParams();

  const [value, setValue] = useState("");
  const [formData, setFormData] = useState();
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const dispatch = useDispatch();

  const { isLoading, isError, isMessage, posts } = useSelector(
    (state) => state.post
  );

  var quillObj;

  useEffect(() => {
    console.log(posts);
    if (posts) {
      setFormData({
        id: posts._id,
        title: posts.title,
        content: posts.content,
        thumbnail: posts.thumbnail,
      });
      setValue(posts.content);
      setTags(posts.categories);
    }
  }, [posts]);

  useEffect(() => {
    dispatch(clearError());
    dispatch(clearMessage());
    dispatch(clearPosts());
    if (id) {
      dispatch(getCreatorPostById(id));
    }
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    if (isMessage) {
      toast.success(isMessage);
      dispatch(clearMessage());
    }
  }, [isMessage, dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch(clearError());
    }
  }, [isError, dispatch]);

  const upload = async (image) => {
    if (image == null) return;
    const imageRef = storage.ref(`/post/desc/${image.name}`);

    imageRef
      .put(image)
      .then((snapshot) => {
        // Image uploaded successfully, now get the download URL
        return snapshot.ref.getDownloadURL();
      })
      .then((downloadURL) => {
        // Here you have the download URL of the uploaded image
        const range = quillObj.getEditorSelection();
        quillObj.getEditor().insertEmbed(range.index, "image", downloadURL);
        console.log("Download URL:", downloadURL);
        // You can do whatever you want with the download URL, such as displaying the image on a webpage or saving it to a database.
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      categories: tags,
    }));
  }, [tags]);
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    const tempElement = document.createElement("div");
    let val2 = value;
    tempElement.innerHTML = val2;
    setFormData({
      ...formData,
      ["content"]: value,
      ["contentSnippet"]: tempElement.textContent,
    });
  }, [value]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.keyCode === 32 && inputValue.trim() !== "") {
      const trimmedInput = inputValue.trim();

      setTags((prevTags) => {
        // Ensure prevTags is always an array
        if (!Array.isArray(prevTags)) {
          console.error("prevTags is not an array:", prevTags);
          return [trimmedInput]; // Return a new array with the new tag if prevTags is not an array
        }

        if (prevTags.includes(trimmedInput)) {
          return prevTags; // Return existing tags if the new one is a duplicate
        }

        return [...prevTags, trimmedInput]; // Add new tag if it doesn't exist
      });

      setInputValue(""); // Clear the input field
    }
  };

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  function imageHandler() {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      var file = input.files[0];
      var formData = new FormData();

      formData.append("image", file);

      var fileName = file.name;

      const res = await upload(file);
    };
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    posts.length != 0
      ? dispatch(updatePost(formData))
      : dispatch(creatPost(formData));
  };

  if (isLoading) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className="w-11/12 my-4 mx-auto">
      <h1 className="text-lg font-semibWold my-4">Design Your Posts</h1>
      <form action="POST">
        <div className="bg-white p-4 w-full">
          <div className="w-11/12">
            <label
              for="title"
              class="block my-3 text-base font-medium text-gray-900"
            >
              Post Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              value={formData?.title}
              onChange={(e) => {
                handleChange(e);
              }}
              className="bg-gray-100 border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Post title name..."
            />
          </div>
          <div className="w-11/12">
            <label
              for="thumbnail"
              class="block my-3 text-base font-medium text-gray-900"
            >
              Thumbnail
            </label>
            {formData?.thumbnail == undefined ? (
              <input
                type="file"
                name="thumbnail"
                className="bg-gray-100 border border-gray-300  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  const imageRef = storage.ref(
                    `/post/thumbnail/${e.target.files[0].name}`
                  );
                  imageRef.put(e.target.files[0]).then(async (snapshot) => {
                    const downloadURL = await snapshot.ref.getDownloadURL();
                    console.log(downloadURL);
                    setFormData({
                      ...formData,
                      [e.target.name]: downloadURL,
                    });
                  });
                }}
                alt=""
              />
            ) : (
              <div className="relative w-96 h-52 border-2">
                <img
                  src={formData?.thumbnail}
                  className="h-full object-contain w-full aspect-[1.5]"
                  alt=""
                />
                <div
                  onClick={() => {
                    storage.refFromURL(formData?.thumbnail).delete();
                    setFormData({ ...formData, ["thumbnail"]: undefined });
                  }}
                  className="bg-black w-7 h-7 text-center rounded-full hover:bg-gray-200 font-semibold absolute top-0 right-1 hover:text-black text-white"
                >
                  x
                </div>
              </div>
            )}
            <div className="w-11/12">
              <label
                for="description"
                class="block my-3 mx-1 text-sm font-medium text-gray-900"
              >
                Categories
              </label>
              <div>
                <div>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Enter tags"
                    className="bg-gray-100 border  mb-3 border-gray-300 capitalize  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                  {tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-200 m-1 py-1 px-2 rounded-lg capitalize"
                    >
                      {tag}
                      <span
                        className=" pl-2 font-poppins font-semibold cursor-pointer"
                        onClick={() => handleTagRemove(tag)}
                      >
                        x
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12 ">
            <label
              for="description"
              class="block my-3 mx-1 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <div className="w-full h-80 pb-4 relative">
              <ReactQuill
                ref={(x) => {
                  quillObj = x;
                }}
                theme="snow"
                style={{
                  height: "20rem!important",
                }}
                modules={modules}
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="my-10 block mx-auto px-6 hover:scale-110 py-1 h-fit bg-orange-600  sm:my-5 hover:shadow-lg rounded-md text-white hover:bg-orange-500 duration-100 hover:transition-all "
          >
            Publish
          </button>
        </div>{" "}
      </form>
    </div>
  );
};

export default CreatePosts;
