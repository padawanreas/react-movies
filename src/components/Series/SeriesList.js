import React from "react";
import Row from "../Row/Row";
import requests from "../Configs/ApiConfigs";

function SeriesList() {
  return (
    <>
      <Row title="Airling Today" fetchUrl={requests.seriesAirling} />
      <Row title="Top Rated" fetchUrl={requests.seriesTopRated} />
      <Row title="Popular" fetchUrl={requests.seriesPopular} />
    </>
  );
}

export default SeriesList;
