import React, { useEffect, useState } from "react";
import sidebarContext from "../context/sidebar_context";

const SidebarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const updateSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth < 700) {
        updateSidebar();
      }
    });
  }, []);

  return (
    <sidebarContext.Provider value={{ sidebar, updateSidebar }}>
      {children}
    </sidebarContext.Provider>
  );
};

export default SidebarProvider;
