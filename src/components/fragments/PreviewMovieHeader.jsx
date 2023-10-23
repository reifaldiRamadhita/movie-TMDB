import Button from "../elements/button";
import TitleSection from "../elements/title/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

// import required modules
import { FreeMode, Mousewheel } from "swiper/modules";
import { getGenre } from "../../service/movie.service";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function PreviewMovieHeader({ topMovies, handlePreview, previewMv }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenre()
      .then((resolve) => setGenres(resolve))
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <div className="absolute left-0  z-10 flex h-fit w-full flex-col-reverse overflow-hidden md:bottom-0 md:flex-row lg:bottom-40">
      {/* detail movie */}
      <div className="w-full px-5 md:w-1/2 md:px-10 lg:px-20">
        <h1 className="mb-2 text-xl font-bold text-white md:mb-3 md:text-2xl lg:mb-4 lg:text-4xl">
          {previewMv.title}
        </h1>
        <p className="mb-4 text-xs text-gray-400 md:mb-5 lg:mb-10 lg:text-sm">
          <span className="text-red-600">Genre : </span>
          {Object.hasOwn(previewMv, "genre_ids") &&
            previewMv.genre_ids
              .map((id) => {
                const getDataGenre = genres.find((data) => data.id === id);
                return getDataGenre && getDataGenre.name;
              })
              .join(" | ")}
        </p>
        <p className="mb-5 text-sm leading-relaxed text-gray-300 md:mb-8 md:text-base lg:mb-12 lg:text-lg">
          {Object.hasOwn(previewMv, "overview") &&
          previewMv.overview.length > 200
            ? `${previewMv.overview.substring(0, 200)} ...`
            : previewMv.overview}
        </p>
        <Button>View Movie</Button>
      </div>

      {/* box card */}
      <div className="mb-8 w-full pl-0 md:mb-0 md:w-1/2 md:pl-10 lg:pl-20">
        <TitleSection>Hot movies</TitleSection>

        {/* card movie */}
        <div className="w-full">
          <Swiper
            spaceBetween={10}
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={{
              invert: false,
            }}
            breakpoints={{
              380: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[FreeMode, Mousewheel]}
          >
            {topMovies &&
              topMovies.map((movie, i) => (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => handlePreview(movie)}
                    className="flex h-fit w-16 cursor-pointer flex-col items-center md:w-24 lg:w-32"
                  >
                    <img
                      src={`${import.meta.env.VITE_API_IMG}/${
                        movie.poster_path
                      }`}
                      alt={movie.title}
                      loading="lazy"
                      className={`mb-3 w-full object-contain brightness-75 md:h-32 lg:h-48 ${
                        movie.id === previewMv.id && "brightness-100"
                      }`}
                    />
                    <p
                      className={`hidden w-full pb-2 text-center text-gray-300 md:block md:text-sm lg:text-sm ${
                        movie.id === previewMv.id &&
                        "border-red-500 md:border-b-2 lg:border-b-4"
                      }`}
                    >
                      {movie.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PreviewMovieHeader;
