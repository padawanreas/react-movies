import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_KEY, baseUrl } from "../Configs/Api";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Banner.css";

function HomeBanner() {
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get(
        `${baseUrl}/trending/all/day?api_key=${API_KEY}&language=fr-FR`
      );
      setMedias(response.data.results);
    };
    fetchMedia();
  }, []);

  console.log(medias);

  return (
    <>
      <div className="banner">
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
          {medias.map((media) => (
            <SwiperSlide key={media.id}>
              <div className="banner__content">
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

                      <button className="btn-info">More info</button>
                    </div>
                  </div>
                }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default HomeBanner;
