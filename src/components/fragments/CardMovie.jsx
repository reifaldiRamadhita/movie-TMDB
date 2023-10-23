import { useEffect, useState } from "react";
import { getGenre } from "../../service/movie.service";
import { useNavigate } from "react-router-dom";

function CardMovie({ id, img, release, genre }) {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let unmountGenres = false;

    getGenre()
      .then((resolve) => {
        if (!unmountGenres) {
          setGenres(resolve);
        }
      })
      .catch((err) => console.error(err.message));

    return () => {
      unmountGenres = true;
    };
  }, []);

  const handleGetDetailsMovie = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div
      className={`group relative h-32 cursor-pointer overflow-hidden rounded-sm md:h-56 lg:h-64 ${
        img === null && "hidden"
      }`}
      onClick={() => handleGetDetailsMovie(id)}
    >
      <img
        src={`${import.meta.env.VITE_API_IMG}/${img}`}
        alt=""
        loading="lazy"
        className="h-full w-full object-contain brightness-[70%] transition duration-500 group-hover:brightness-100"
      />
      <p className="absolute bottom-7 left-3 hidden pr-3 text-xs text-gray-300 transition duration-500 group-hover:text-gray-300/0 md:block">
        {genre &&
          genre
            .map((id) => {
              const getDataGenre = genres.find((data) => data.id === id);
              return getDataGenre && getDataGenre.name;
            })
            .join(" | ")}
      </p>
      <p className="absolute bottom-2 left-3 text-[10px] text-gray-300 transition duration-700 group-hover:text-gray-300/0">
        {release}
      </p>
    </div>
  );
}

export default CardMovie;
