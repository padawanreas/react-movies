import React from "react";
import Row from "../Row/Row";
import requests from "../Configs/ApiConfigs";

function SeriesList() {
  const type = "tv";
  return (
    <>
      <Row title="Airling Today" fetchUrl={requests.airling(type)} />
      <Row title="Top Rated" fetchUrl={requests.topRated(type)} />
      <Row title="Popular" fetchUrl={requests.popular(type)} />
    </>
  );
}

export default SeriesList;
