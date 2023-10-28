import React from "react";
import Row from "../Row/Row";
import requests from "../Configs/ApiConfigs";

function MoviesList() {
  const type = "movie";
  return (
    <>
      <Row title="Upcoming" fetchUrl={requests.upcoming(type)} />
      <Row title="Top Rated" fetchUrl={requests.topRated(type)} />
      <Row title="Popular" fetchUrl={requests.popular(type)} />
    </>
  );
}

export default MoviesList;
