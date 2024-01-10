import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import OverviewPage from "../overview_page";
import { useSelector } from "react-redux";
import {
  getMostViewPostByCategories,
  getPostByCategories,
} from "../../redux/action/post_action";
import Header from "../Home/header";
import SEO from "../../seo";

const EducationalPages = (props) => {
  const [loading, setLoading] = useState(false);
  const [mostView, setMost] = useState();
  const [recent, setRecent] = useState();

  const getViewPostByCat = async () => {
    const mostViewData = [];
    for (const x of props.category || []) {
      const data = await getMostViewPostByCategories(x, 7);
      mostViewData.push(...data);
    }
    setMost(mostViewData);
  };

  const getPostByCat = async () => {
    const recentData = [];
    for (const x of props.category || []) {
      const data = await getPostByCategories(x);
      recentData.push(...data);
    }
    setRecent(recentData);
  };

  const dataLoading = async () => {
    setLoading(true);
    await getViewPostByCat();
    await getPostByCat();
    setLoading(false);
  };

  useEffect(() => {
    dataLoading();
  }, [document.location.pathname]);

  return (
    <>
      <SEO
        title={`${props.title} | Entrepeneurs WOODS`}
        description={`Get Latest News and Update on ${props.title}`}
        keywords={`${props.category?.join(", ")}`}
      />
      <div className="flex flex-col justify-between h-screen">
        <div className=" w-[95%] lg:w-[85%] mx-auto">
          <Navbar />
          {loading ? (
            <div class="wrapper">
              <div class="box-wrap">
                <div class="box one"></div>
                <div class="box two"></div>
                <div class="box three"></div>
                <div class="box four"></div>
                <div class="box five"></div>
                <div class="box six"></div>
              </div>
            </div>
          ) : (
            <>
              <Header posts={mostView} data={props.header} />
              <OverviewPage title={props.title} headerPost={recent} />
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EducationalPages;
