import { useLoaderData } from "react-router-dom";
import CastMovie from "../../fragments/CastMovie";
import { useState, useEffect } from "react";
import ReviewMovie from "../../fragments/ReviewMovie";
import Footer from "../Foooter";

function MainBodyDetails() {
  const detailsMovie = useLoaderData();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // get genre movie
    const genresMv = detailsMovie.genres.map((genre) => genre.name);
    setGenres(genresMv);
  }, [detailsMovie]);

  return (
    <div className="absolute top-40 flex w-full flex-wrap justify-center px-5 md:top-80 md:px-0">
      {/* left side */}
      <div className="flex w-full flex-wrap gap-x-16 pb-12 md:w-1/2">
        <div className="mb-10 flex w-fit gap-x-8 md:mb-0 md:flex-col">
          <img
            src={`${import.meta.env.VITE_API_IMG}/${detailsMovie.poster_path}`}
            alt={detailsMovie.title}
            loading="lazy"
            className="mb-8 w-24 rounded-md object-contain shadow-lg md:w-40"
          />
          <ul className="flex flex-col md:flex-row md:gap-x-8 lg:flex-col">
            <li className="mb-3">
              <h5 className="mb-1 text-lg font-semibold text-gray-400 md:mb-2">
                Status
              </h5>
              <p className="text-gray-100">{detailsMovie.status}</p>
            </li>
            <li className="mb-3">
              <h5 className="mb-1 text-lg font-semibold text-gray-400 md:mb-2">
                Duration
              </h5>
              <p className="text-gray-100">
                {Math.floor(detailsMovie.runtime / 60)}h{" "}
                {detailsMovie.runtime % 60}m
              </p>
            </li>
            <li className="mb-3">
              <h5 className="mb-1 text-lg font-semibold text-gray-400 md:mb-2">
                Budget
              </h5>
              <p className="text-gray-100">
                {!detailsMovie.budget
                  ? "-"
                  : detailsMovie.budget.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
              </p>
            </li>
          </ul>
        </div>

        <div className="md:w-full lg:w-2/3">
          <div className="lg:h-60">
            <h5 className="mb-4 text-2xl font-bold text-gray-100 md:text-3xl lg:text-4xl">
              {detailsMovie.title}
            </h5>
            <p className="mb-3 text-gray-400">{detailsMovie.release_date}</p>
            <p className="mb-3 w-fit bg-red-500 px-1 text-gray-100">
              {detailsMovie.vote_average.toFixed(1)}
            </p>
            <p className="mb-3 text-gray-300">
              {genres.length > 0 && genres.join(" | ")}
            </p>
          </div>

          <div className="mt-10">
            <h5 className="mb-3 text-2xl font-semibold text-gray-500">
              <span className="text-red-500"> | </span>Overview
            </h5>
            <p className="tracking-wide text-gray-300 md:text-base md:leading-snug lg:text-lg lg:leading-relaxed">
              {detailsMovie.overview}
            </p>
          </div>
        </div>

        <ReviewMovie detailsMovie={detailsMovie} />
      </div>

      {/* right side */}
      <div className="mb-32 w-full px-5 md:mb-72 md:w-[38%] md:pl-20 md:pt-[280px] lg:w-1/3">
        {/* production company */}
        <div className="mb-14">
          <h5 className="mb-5 text-2xl font-semibold text-gray-500">
            <span className="text-red-500"> | </span>Production
          </h5>
          <div className="flex flex-wrap gap-5">
            {detailsMovie.production_companies.map((company, i) => {
              if (company.logo_path) {
                return (
                  <img
                    key={i}
                    src={`${import.meta.env.VITE_API_IMG}/${company.logo_path}`}
                    className="h-14 w-14 rounded-md bg-gray-100 object-contain p-3 md:h-16 md:w-16 lg:h-20 lg:w-20"
                    loading="lazy"
                  />
                );
              } else {
                return (
                  <p
                    key={i}
                    className="flex h-14 w-14 items-center justify-center rounded-md bg-gray-100 px-2 text-center text-[8px] text-dark md:h-16 md:w-16 md:text-xs lg:h-20 lg:w-20"
                  >
                    {company.name}
                  </p>
                );
              }
            })}
          </div>
        </div>
        {/* credits movie */}
        {<CastMovie id={detailsMovie.id} />}
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default MainBodyDetails;
