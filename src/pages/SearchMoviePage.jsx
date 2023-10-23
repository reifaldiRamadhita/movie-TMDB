import { useState, useEffect, useContext } from "react";
import CardMovie from "../components/fragments/CardMovie";
import { useLoaderData, useNavigate } from "react-router-dom";
import { InputSearchMovie } from "../context/searchContext";
import Navbar from "../components/layouts/Navbar";

function SearchMoviePage() {
  const { titleMovie } = useContext(InputSearchMovie);
  const dataMovies = useLoaderData();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  const handleDetailsMovie = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="h-fit w-full">
      <Navbar />
      <div className="relative w-full">
        <i className="flex w-full items-center gap-x-2 border-b border-gray-500 px-5 pb-5 pt-20 text-base text-gray-400 md:px-20 md:text-xl">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="#010511"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          {titleMovie}
        </i>

        {/* list movie */}
        <div className="relative mt-12 flex w-full justify-center px-5 md:mt-20 md:px-20">
          {/* card movie */}
          <div className="">
            {movies.map((movie, i) => (
              <div
                onClick={() => handleDetailsMovie(movie.id)}
                key={i}
                className="mb-6 flex w-fit cursor-pointer items-start gap-x-3 border-b border-gray-800 pb-5 md:h-60 lg:mb-8 lg:h-72 lg:scale-90"
              >
                <CardMovie img={movie.poster_path} />
                <div className="h-full w-full rounded-r-md px-0 ps-5 md:px-10 md:pt-4 lg:w-[750px] lg:pt-0">
                  <p className="mb-2 text-xl font-bold text-gray-300 md:mb-4 md:text-3xl">
                    {movie.title}
                  </p>
                  <p className="text-sm text-gray-400 md:text-base">
                    {movie.overview.length > 170
                      ? `${movie.overview.substring(0, 170)}...`
                      : movie.overview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchMoviePage;
