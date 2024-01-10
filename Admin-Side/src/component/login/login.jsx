import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getUser, signin, signup } from "../../redux/action/auth";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState(false);

  const { isLoading, isError, data } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState();

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }

    if (data) {
      toast.success("User successfully created");
    }

    if (data?.token) {
      navigate('/dash/post');
    }
  }, [isError, data, dispatch]);

  useEffect(() => {
    dispatch(getUser());
  },[])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login ? dispatch(signup(formData)) : dispatch(signin(formData));
  };

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <nav className="shadow-xl p-3">
          <img src={Logo} className="h-16 mx-8 " alt="" />
        </nav>
        <div className="flex h-4/5 ">
          <div className="md:w-1/2 relative  w-11/12  m-auto md:shadow-none  h-full ">
            <form>
              <div className="p-2 md:p-8 w-11/12 md:w-4/5 h-full m-auto flex flex-col justify-center items-center">
                <div className="text-center py-10">
                  <p className="uppercase  text-4xl  font-medium font-poppins">
                    Welcome Back
                  </p>
                  <p className=" text-base font-normal  font-poppins">
                    Welcome back! Please enter your details.{" "}
                  </p>
                </div>

                {login ? (
                  <>
                    <div className="w-11/12 my-2">
                      <label
                        for="name"
                        className="block my-1 text-base font-semibold text-gray-900 font-sans"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        //   value={name}
                        className=" border border-gray-300  text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        placeholder="Enter your Name"
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className="w-11/12 my-2">
                  <label
                    for="email"
                    className="block my-1 text-base font-semibold text-gray-900 font-sans"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    //   value={name}
                    className=" border border-gray-300  text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="w-11/12 my-2">
                  <label
                    htmlFor="email"
                    className="block my-1 text-base font-semibold text-gray-900 font-sans"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                    name="password"
                    //   value={name}
                    className=" border border-gray-300  text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="*************"
                  />
                </div>
                {!login ? (
                  <button
                    onClick={handleSubmit}
                    className="py-3 w-11/12 rounded-xl bg-rose-600 my-6 font-poppins font-semibold text-sm text-white"
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="py-3 w-11/12 rounded-xl bg-rose-600 my-6 font-poppins font-semibold text-sm text-white"
                  >
                    Sign Up
                  </button>
                )}
                <p className=" text-base font-normal  font-poppins">
                  {!login
                    ? "Don’t have an account?"
                    : "Do you have an account?"}{" "}
                  <span
                    className="text-red-500 cursor-pointer"
                    onClick={() => setLogin(!login)}
                  >
                    {!login ? "Sign up for free!" : "Sign in to access"}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
