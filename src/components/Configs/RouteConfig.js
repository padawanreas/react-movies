import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Detail from "../Detail/Detail";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:type/:name/:id" element={<Detail />} />
    </Routes>
  );
};

export default RouteConfig;
