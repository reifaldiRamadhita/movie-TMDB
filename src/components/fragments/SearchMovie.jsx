import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { InputSearchMovie } from "../../context/searchContext";

function SearchMovie() {
  const { setTitleMovie } = useContext(InputSearchMovie);
  const navigate = useNavigate();

  const handleSearchMovie = (e) => {
    e.preventDefault();

    if (e.target.movie.value.length > 2) {
      setTitleMovie(e.target.movie.value);
      navigate(`search/${e.target.movie.value}`);
    } else {
      alert("Invalid input movie");
    }
  };

  return (
    <form
      onSubmit={(e) => handleSearchMovie(e)}
      className="my-20 flex w-full justify-center"
    >
      <div className="relative w-[90%] md:w-1/2 lg:w-[40%]">
        <input
          type="text"
          name="movie"
          className="w-full rounded-full bg-gray-700 px-7 py-2 text-gray-300 outline-none"
          placeholder="Search for a movie"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-dark px-4 py-2 text-sm text-white transition duration-300 hover:bg-dark/60">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchMovie;
