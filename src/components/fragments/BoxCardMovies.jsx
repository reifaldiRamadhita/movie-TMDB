import { Swiper, SwiperSlide } from "swiper/react";
import CardMovie from "./CardMovie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

function BoxCardMovies({ movies }) {
  return (
    <div className="relative flex w-full">
      {/* overlay */}
      <div className="absolute left-0 top-0 z-10 h-full w-5 bg-gradient-to-r from-dark/80 to-dark/0 md:w-20"></div>

      <Swiper
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          380: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode]}
      >
        {/* card movie */}
        {movies &&
          movies.map((movie, i) => (
            <SwiperSlide key={i}>
              <CardMovie
                id={movie.id}
                img={movie.poster_path}
                release={movie.release_date}
                genre={movie.genre_ids}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      {/* overlay */}
      <div className="absolute right-0 top-0 z-10 h-full w-5 bg-gradient-to-l from-dark/80 to-dark/0 md:w-20"></div>
    </div>
  );
}

export default BoxCardMovies;
