import React from "react";
import Row from "../Row/Row";
import requests from "../Configs/ApiConfigs";

function HomeList() {
  const type = ["movie", "tv"];
  return (
    <>
      <Row title="Treding Movies" fetchUrl={requests.trending(type[0])} />
      <Row title="Treding TVs" fetchUrl={requests.trending(type[1])} />
    </>
  );
}

export default HomeList;
