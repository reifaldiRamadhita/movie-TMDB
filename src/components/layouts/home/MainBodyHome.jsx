import { useEffect, useState } from "react";
import TitleSection from "../../elements/title/TitleSection";
import CardMovie from "../../fragments/CardMovie";
import SearchMovie from "../../fragments/SearchMovie";
import {
  getMoviePopular,
  getMoviesCollection,
  getUpcomingMovie,
} from "../../../service/movie.service";
import SelectCategoryMovie from "../../fragments/SelectCategoryMovie";
import BoxCardMovies from "../../fragments/BoxCardMovies";
import imgMovie from "../../../assets/movie.png";

function MainBodyHome() {
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [moviesCategory, setMoviesCategory] = useState([]);
  const [idCategory, setIdCategory] = useState("28");

  useEffect(() => {
    let unmountHome = false;

    getMoviePopular()
      .then((resolve) => {
        !unmountHome && setMoviesPopular(resolve);
      })
      .catch((err) => console.error(err.message));

    getUpcomingMovie()
      .then((resolve) => {
        !unmountHome && setUpcomingMovies(resolve);
      })
      .catch((err) => console.error(err.message));

    return () => {
      unmountHome = true;
    };
  }, []);

  useEffect(() => {
    let unmountColection = false;

    getMoviesCollection(idCategory)
      .then((resolve) => {
        unmountColection && setMoviesCategory(resolve);
      })
      .catch((err) => console.error(err.message));

    return () => {
      unmountColection = true;
    };
  }, [idCategory]);

  return (
    <main>
      {/* input search */}
      <SearchMovie />

      {/* popular movie */}
      <div className="mb-10 md:mb-20 lg:mb-28">
        <TitleSection classname="ps-20">What&apos;s Popular</TitleSection>
        {/* box card */}
        <BoxCardMovies movies={moviesPopular} />
      </div>

      {/* upcoming */}
      <div className="mb-14 md:mb-24 lg:mb-28">
        <TitleSection classname="ps-20">Upcoming</TitleSection>
        {/* box card */}
        <BoxCardMovies movies={upcomingMovies} />
      </div>

      {/* service movie premium */}
      <div className="relative mb-14 w-full px-5 md:mb-24 md:h-48 md:px-10 lg:mb-32 lg:h-72 lg:px-20">
        <div className="flex w-full justify-end">
          <img
            src={imgMovie}
            className="bg-dark object-contain md:h-48 lg:h-72"
            loading="lazy"
          />
        </div>
        <div className="absolute left-8 top-0 flex h-full w-fit flex-col justify-center md:left-32">
          <h1 className="mb-4 text-lg font-bold text-white md:mb-8 md:text-3xl lg:text-4xl">
            Explore more and more <br />
            exclusive movies with Movie Premium
          </h1>
          <div>
            <button className="rounded-full bg-red-600 px-4 py-2 text-xs text-white md:text-sm">
              Get Update
            </button>
            <span className="ms-5 text-xs text-gray-300 md:text-sm">
              Only 4$/month inn the first year
            </span>
          </div>
        </div>
      </div>

      {/* category movies */}
      <div className="mb-32">
        {/* selected category movies */}
        <div className="flex flex-col items-center">
          <TitleSection>Find Your Category</TitleSection>
          <SelectCategoryMovie
            idCategory={idCategory}
            setIdCategory={setIdCategory}
          />
          <div className="flex flex-wrap justify-center gap-3 px-5 md:gap-5 md:px-20 lg:px-32">
            {moviesCategory.length > 0 &&
              moviesCategory.map((movie, i) => (
                <CardMovie key={i} id={movie.id} img={movie.poster_path} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainBodyHome;
