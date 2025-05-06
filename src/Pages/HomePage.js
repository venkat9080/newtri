import React from "react";
import "./styles.css";
import SearchAppBar from "../Components/HomePageComponents/AppBar";
import TgMenu from "../Components/HomePageComponents/TgMenu";
import Header1 from "../Components/HomePageComponents/Header1";
import Header2 from "../Components/HomePageComponents/Header2";
import LatestNews from "../Components/HomePageComponents/add1";

import Footer from "../Components/HomePageComponents/Footer";
import News from "../Components/HomePageComponents/new";
import CenteredImage from "../Components/HomePageComponents/top";


const HomePage = () => {
  return (
    <div className="HomePage">
       <></>
       <></>
      <CenteredImage/>
     
      <SearchAppBar />
      <TgMenu />
      <Header1 />
      <Header2 />
      <LatestNews/>
      <News/>
     
      <Footer/>
    </div>
  );
};

export default HomePage;
