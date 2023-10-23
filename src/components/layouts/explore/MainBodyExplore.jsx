import CardMovie from "../../fragments/CardMovie";

function MainBodyExplore({ moviesFilter }) {
  return (
    <div className="flex h-fit w-full flex-wrap justify-center gap-3 lg:gap-5">
      {moviesFilter.length > 0 &&
        moviesFilter.map((movie, i) => (
          <CardMovie
            key={i}
            id={movie.id}
            img={movie.poster_path}
            release={movie.release_date}
            genre={movie.genre_ids}
          />
        ))}
    </div>
  );
}

export default MainBodyExplore;
