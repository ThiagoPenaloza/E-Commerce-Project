import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div className="home">
      <Login />
    </div>
  );
};

export default Home;
