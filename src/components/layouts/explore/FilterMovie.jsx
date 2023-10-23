import InputRadioButton from "../../elements/inputRadioButton/inputRadioButton";
import { useState } from "react";

function FilterMovie({ handleFilterMovie, genres, idGenre, setIdGenre }) {
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="mb-16 h-fit w-full md:w-60 lg:w-72">
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-semibold tracking-wide text-white md:mb-8 md:text-2xl lg:mb-10 lg:text-3xl">
          Explore Movie
        </h5>
        <p
          onClick={handleShowFilter}
          className={`block w-fit md:hidden ${!showFilter && "rotate-180"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="#14b8a6"
            className="bi bi-arrow-down-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </p>
      </div>
      <form
        onSubmit={(e) => handleFilterMovie(e)}
        className={`mt-4 rounded-lg border border-gray-800 p-5 shadow-xl shadow-gray-700 ${
          showFilter ? "block md:hidden" : "hidden md:block"
        }`}
      >
        {/* sort by */}
        <div className="mb-7">
          <p className="mb-4 text-lg text-gray-100">Sort By</p>
          <select
            name="sortMovie"
            className="w-full rounded-md border border-gray-500 bg-gray-800 px-3 py-1 text-sm text-gray-300 outline-none md:text-sm lg:text-base"
          >
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
            <option value="primary_release_date.desc">
              Release Date Descending
            </option>
            <option value="primary_release_date.asc">
              Release Date Ascending
            </option>
            <option value="revenue.desc">Revenue Descending</option>
            <option value="revenue.asc">Revenue Ascending</option>
          </select>
        </div>
        {/* release date */}
        <div className="mb-7">
          <p className="mb-4 text-lg text-gray-100">Release Date</p>
          <div className="mb-4 flex gap-x-3">
            <label htmlFor="from" className="w-20 text-gray-300">
              From
            </label>
            <input
              type="date"
              name="dateFrom"
              id="from"
              className="w-full rounded-md border border-gray-500 bg-gray-800 px-3 py-1 text-gray-300 outline-none md:text-sm lg:text-base"
            />
          </div>
          <div className="flex gap-x-3">
            <label htmlFor="to" className="w-20 text-gray-300">
              To
            </label>
            <input
              type="date"
              name="dateTo"
              id="to"
              defaultValue="2024-04-18"
              className="w-full rounded-md border border-gray-500 bg-gray-800 px-3 py-1 text-gray-300 outline-none md:text-sm lg:text-base"
            />
          </div>
        </div>
        {/* genre */}
        <div className="mb-7">
          <p className="mb-4 text-lg text-gray-100">Genres</p>
          {genres.length > 0 &&
            genres.map((genre, i) => (
              <InputRadioButton
                key={i}
                name="genres"
                value={genre.id}
                idGenre={idGenre}
                setIdGenre={setIdGenre}
              >
                {genre.name}
              </InputRadioButton>
            ))}
        </div>

        <button className="inline-block w-full rounded-md bg-blue-600 py-2 text-gray-300">
          Search
        </button>
      </form>
    </div>
  );
}

export default FilterMovie;
