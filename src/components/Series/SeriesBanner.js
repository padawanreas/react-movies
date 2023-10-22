import React, { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../Configs/ApiConfigs";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../Home/Home.css";
import { Link } from "react-router-dom";

function SeriesBanner() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const fetchserie = async () => {
      const response = await axios.get(
        `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=fr-FR`
      );
      setSeries(response.data.results);
    };
    fetchserie();
  }, []);

  console.log(series);

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
            {series.map((serie) => (
              <SwiperSlide key={serie.id}>
                <img
                  key={serie.id}
                  src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`}
                  alt={serie.title || serie.original_title || serie.name}
                  className="banner__images"
                />

                {
                  <div className="banner__text__content">
                    <div className="banner__text">
                      <h1>
                        {serie.title || serie.original_title || serie.name}
                      </h1>
                      <p>{serie.overview}</p>

                      <Link to="/detail">
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

export default SeriesBanner;
