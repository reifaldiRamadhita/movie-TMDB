import { useEffect, useState } from "react";
import { getCreditsMovie } from "../../service/movie.service";

function CastMovie({ id }) {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getCreditsMovie(id)
      .then((resolve) => setCasts(resolve))
      .catch((err) => console.error(err.message));
  }, [id]);

  return (
    <div>
      <h5 className="mb-5 text-2xl font-semibold text-gray-500">
        <span className="text-red-500"> | </span>Top Billed Cast
      </h5>
      <div className="mb-8 flex w-full flex-wrap gap-x-4 gap-y-7 md:gap-x-3">
        {casts.length > 0 &&
          casts.slice(0, 6).map((cast, i) => (
            <div key={i} className="h-fit w-16 md:w-20 lg:w-24">
              <img
                src={`${import.meta.env.VITE_API_IMG}/${cast.profile_path}`}
                alt={cast.name}
                loading="lazy"
                className="w-full rounded-md object-contain md:h-24 lg:h-36"
              />
              <p className="mt-2 text-center text-sm text-gray-300 lg:text-base">
                {cast.name}
              </p>
              <p className="text-center text-xs text-gray-500 lg:text-sm">
                {cast.character}
              </p>
            </div>
          ))}
      </div>
      {/* <button className="text-blue-500 font-bold block w-full py-2 bg-blue-500/40 rounded-sm hover:bg-blue-600 hover:text-gray-100 transition duration-500 border-b-4 border-blue-600">
        View More
      </button> */}
    </div>
  );
}

export default CastMovie;
