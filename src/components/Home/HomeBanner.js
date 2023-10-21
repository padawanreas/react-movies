import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../Configs/ApiConfigs";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Home.css";

function HomeBanner() {
  const [medias, setMedias] = useState([]);
  useEffect(() => {
    const fetchMedia = async () => {
      const response = await axios.get(
        `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=fr-FR`
      );
      setMedias(response.data.results);
    };
    fetchMedia();
  }, []);

  console.log(medias);

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
          <div lassName="banner__content">
            {medias.map((media) => (
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

                      <button className="btn-info">More info</button>
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

export default HomeBanner;