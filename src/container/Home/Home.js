import React from "react";
import "./Home.css";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
