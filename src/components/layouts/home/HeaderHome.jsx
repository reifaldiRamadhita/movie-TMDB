import { useState, useEffect } from "react";
import PreviewMovieHeader from "../../fragments/PreviewMovieHeader";
import { useLoaderData } from "react-router-dom";

function HeaderHome() {
  const topMovies = useLoaderData();
  const [previewMv, setPreviewMovie] = useState({});

  useEffect(() => {
    topMovies && setPreviewMovie(topMovies[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePreview = (movie) => {
    setPreviewMovie(movie);
  };

  return (
    <header className="relative mb-[550px] w-full md:mb-0 md:h-fit lg:h-full">
      {/* background img */}
      <div className="w-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${previewMv.backdrop_path}`}
          alt=""
          loading="lazy"
          className="w-full object-contain md:h-full lg:min-h-screen"
        />
      </div>

      {/* overlay */}
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white/0 to-dark"></div>

      <PreviewMovieHeader
        topMovies={topMovies}
        handlePreview={handlePreview}
        previewMv={previewMv}
      />
    </header>
  );
}

export default HeaderHome;
