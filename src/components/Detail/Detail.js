import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import requests from "../Configs/ApiConfigs";
import "./Detail.css";

function Detail() {
  const { type, id } = useParams();
  const [medias, setMedias] = useState([]);
  const [genres, setGenres] = useState([]);
  //console.log(type, id);

  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get(requests.detail(type, id));
      setMedias(response.data);
      setGenres(response.data.genres);
    };
    fetchMedia();
  }, [id, type]);
  console.log(medias);
  //console.log(genres);

  return (
    <div className="container">
      <div className="container-bg">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${medias.backdrop_path}`}
          alt={medias.original_title}
        />
      </div>
      <div className="content">
        <div className="content-body">
          <div className="poster-img">
            <img
              src={`https://image.tmdb.org/t/p/w780/${medias.poster_path}`}
              alt={medias.original_title}
            />
          </div>
          <div className="content-text">
            <h1>{medias.original_title}</h1>
            <div className="content-genres">
              {genres &&
                genres.map((genre) => (
                  <p className="genres-btn" key={genre.id}>
                    {genre.name}
                  </p>
                ))}
            </div>
            <div className="content-descrip">
              <p>{medias.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
