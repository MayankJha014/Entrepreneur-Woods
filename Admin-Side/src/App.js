import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./component/sidebar";
import SidebarProvider from "./component/theme/sidebar_provider";
import Posts from "./component/features/posts/posts";
import CreatePosts from "./component/features/posts/create-posts";
import { useEffect } from "react";
import ThemePage from "./component/features/theme/theme_page";
import Login from "./component/login/login";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getHomeDetail } from "./redux/action/nav";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeDetail());
  }, []);
  return (
    <div className="App">
      <Toaster />

      <Router>
        <SidebarProvider>
          <Routes>
            <Route element={<Login />} exact path="/" />
            <Route
              element={
                <div>
                  <Sidebar>
                    <Routes>
                      <Route element={<Posts />} exact path="/post" />
                      <Route
                        element={<CreatePosts />}
                        path="/create-post/:id"
                      />
                      <Route element={<CreatePosts />} path="/create-post" />
                      <Route element={<ThemePage />} path="/theme" />
                      {/*  */}
                    </Routes>
                  </Sidebar>
                </div>
              }
              path="/dash/*"
            />
          </Routes>
        </SidebarProvider>
      </Router>
    </div>
  );
}

export default App;
