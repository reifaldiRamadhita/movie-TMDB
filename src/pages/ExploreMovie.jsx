import { useEffect, useState } from "react";
import { getFilterMovie, getGenre } from "../service/movie.service";
import MainBodyExplore from "../components/layouts/explore/MainBodyExplore";
import FilterMovie from "../components/layouts/explore/FilterMovie";
import Navbar from "../components/layouts/Navbar";

function ExploreMovie() {
  // state get genre
  const [genres, setGenres] = useState([]);
  const [idGenre, setIdGenre] = useState("");
  // state filter movie
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [releaseMovieFrom, setReleaseMovieFrom] = useState("");
  const [releaseMovieTo, setReleaseMovieTo] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  // state result filter movie
  const [moviesFilter, setMoviesFilter] = useState([]);

  useEffect(() => {
    getGenre()
      .then((resolve) => setGenres(resolve))
      .catch((err) => console.error(err.message));

    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    const filter = releaseMovieFrom + releaseMovieTo + filterGenre;
    getFilterMovie(sortBy, filter)
      .then((resolve) => setMoviesFilter(resolve))
      .catch((err) => console.error(err.message));
  }, [sortBy, releaseMovieFrom, releaseMovieTo, filterGenre]);

  const handleFilterMovie = (e) => {
    e.preventDefault();
    setSortBy(e.target.sortMovie.value);
    e.target.dateFrom.value &&
      setReleaseMovieFrom(
        `&primary_release_date.gte=${e.target.dateFrom.value}`,
      );
    e.target.dateTo.value &&
      setReleaseMovieTo(`&release_date.lte=${e.target.dateTo.value}`);
    idGenre && setFilterGenre(`&with_genres=${idGenre}`);
  };

  return (
    <div className="flex min-h-screen w-full flex-wrap px-5 py-24 md:flex-nowrap md:gap-x-10 md:px-10 lg:gap-x-16 lg:px-20">
      <Navbar />
      {/* filtering movie */}
      <FilterMovie
        handleFilterMovie={handleFilterMovie}
        genres={genres}
        idGenre={idGenre}
        setIdGenre={setIdGenre}
      />

      {/* main filtering movie */}
      <MainBodyExplore moviesFilter={moviesFilter} />
    </div>
  );
}

export default ExploreMovie;
