import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../img/food.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> The Delicios Food </h1>
        <p> Evrithing in one Place</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;