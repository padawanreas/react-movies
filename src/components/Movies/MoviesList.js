import React from "react";
import Row from "../Row/Row";
import requests from "../Configs/ApiConfigs";

function MoviesList() {
  return (
    <>
      <Row title="Upcoming" fetchUrl={requests.moviesUpcoming} />
      <Row title="Top Rated" fetchUrl={requests.moviesTopRated} />
      <Row title="Popular" fetchUrl={requests.moviesPopular} />
    </>
  );
}

export default MoviesList;
