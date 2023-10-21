import React from "react";
import Row from "../Row/Row";
import requests from "../Configs/ApiConfigs";

function HomeList() {
  return (
    <>
      <Row title="Treding Movies" fetchUrl={requests.trendingMovies} />
      <Row title="Treding TVs" fetchUrl={requests.trendingTv} />
    </>
  );
}

export default HomeList;
