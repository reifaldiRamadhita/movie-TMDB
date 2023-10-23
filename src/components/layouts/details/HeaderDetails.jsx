import { useLoaderData } from "react-router-dom";

function HeaderDetails() {
  const detailsMovie = useLoaderData();

  return (
    <>
      {/* bg img movie */}
      <img
        src={`https://image.tmdb.org/t/p/original/${detailsMovie.backdrop_path}`}
        alt={detailsMovie.title}
        loading="lazy"
        className="h-fit w-full object-contain object-top md:h-[450px] lg:object-cover"
      />

      {/* overlay */}
      <div className="absolute left-0 top-0 h-60 w-full bg-gradient-to-b from-dark/50 to-dark md:h-[450px]"></div>
    </>
  );
}

export default HeaderDetails;
