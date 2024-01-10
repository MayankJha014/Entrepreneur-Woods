import { useEffect } from "react";
import "./App.css";
import Home, { homeDetail } from "./components/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EducationalPages from "./components/Pages/educational_pages";
import PostDetail from "./components/post_detail";
import { useDispatch, useSelector } from "react-redux";
import { getRecentPost } from "./redux/action/recent_action";
import { getAllCategories } from "./redux/action/category_action";
import CategoryPage from "./components/category_page";
import SearchPage from "./components/serach_page";
import { getHomeDetail } from "./redux/action/post_action";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state.homeDetail);
  useEffect(() => {
    dispatch(homeDetail());
    dispatch(getRecentPost());
    dispatch(getAllCategories());
    dispatch(getHomeDetail());
  }, []);
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/category/:cat" element={<CategoryPage />} />
            <Route path="/search/" element={<SearchPage />} />

            {home &&
              home?.navabar.map((x) => (
                <Route
                  path={x.link}
                  element={
                    <EducationalPages
                      title={x.title}
                      header={x.header}
                      category={x.category}
                    />
                  }
                />
              ))}
            {/* <Route
            path="/entrepreneur"
            element={
              <EducationalPages
              title="Funding"
              header={"2"}
              category={["Funding Fusion"]}
              />
            }
            />
            <Route
            path="/business"
            element={<EducationalPages title="Business" header={"3"} />}
            />
            <Route
            path="/startup"
            element={<EducationalPages title="Startup" header={"4"} />}
          /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
