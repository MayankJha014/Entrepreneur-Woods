import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { home } = useSelector((state) => state.homeDetail);
  let currentDate = new Date();

  return (
    <div>
      {/* <!-- Footer container --> */}


      <footer class="bg-[#252525] rounded-t-lg shadow ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="flex items-center ">
            <img src={home?.navLogo} class="h-8 m-auto" alt="Entrepeneurs WOODS" />
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©{currentDate.getFullYear()} Entrepeneurs WOODS™. All Rights Reserved.</span>
        </div>
      </footer>


    </div>
  );
};

export default Footer;
