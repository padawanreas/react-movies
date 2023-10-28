import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../Configs/ApiConfigs";
import requests from "../Configs/ApiConfigs";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../Home/Home.css";
import { Link } from "react-router-dom";

function MoviesBanner() {
  const [movies, setMovies] = useState([]);
  const type = "movie";

  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get(requests.nowPlaying(type));
      setMovies(response.data.results);
    };
    fetchMedia();
  }, []);

  console.log(movies);

  return (
    <>
      <div className="banner_content">
        <Swiper
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div className="banner__content">
            {movies.map((media) => (
              <SwiperSlide key={media.id}>
                <img
                  key={media.id}
                  src={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
                  alt={media.title || media.original_title || media.name}
                  className="banner__images"
                />

                {
                  <div className="banner__text__content">
                    <div className="banner__text">
                      <h1>
                        {media.title || media.original_title || media.name}
                      </h1>
                      <p>{media.overview}</p>
                      <Link
                        to={`detail/${
                          media.title || media.original_title || media.name
                        }`}
                      >
                        <button className="btn-info">More info</button>
                      </Link>
                    </div>
                  </div>
                }
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default MoviesBanner;
