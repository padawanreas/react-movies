import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get(fetchUrl);
      setMedias(response.data.results);
    };
    fetchMedia();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {medias.map((media) => (
          <div key={media.id}>
            <Link to="/detail">
              {
                <img
                  src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
                  className="row__image"
                  alt={media?.title || media?.name || media?.original_title}
                />
              }
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
