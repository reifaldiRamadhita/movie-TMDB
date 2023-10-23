// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { getReview } from "../../service/movie.service";

function ReviewMovie({ detailsMovie }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    // get review
    getReview(detailsMovie.id)
      .then((resolve) => setReview(resolve))
      .catch((err) => console.error(err.message));
  }, [detailsMovie]);
  return (
    <div
      className={`mt-8 w-full border-t-2 border-gray-700 pt-5 ${
        review.length > 0 ? "block" : "hidden"
      }`}
    >
      <h5 className="mb-5 text-2xl font-semibold text-gray-400">
        <span className="text-red-500"> | </span>Review
      </h5>
      <div className="flex h-fit w-full items-center rounded-xl border border-gray-800 shadow-xl shadow-gray-700">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {review.length > 0 &&
            review.map((rv, i) => {
              const date = new Date(rv.created_at);
              const year = date.getFullYear();
              const month = date.getMonth() + 1;
              const day = date.getDate();
              const nameMonth = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];

              return (
                <SwiperSlide key={i}>
                  {/* card review */}
                  <div className="h-full px-5 py-5 md:px-14 md:py-8">
                    <div className="mb-7 flex gap-x-5">
                      {rv.author_details.avatar_path ? (
                        <img
                          src={`${import.meta.env.VITE_API_IMG}/${
                            rv.author_details.avatar_path
                          }`}
                          alt={rv.author_details.name}
                          loading="lazy"
                          className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 md:h-14 md:w-14">
                          <p className="h-8 align-top text-2xl font-bold text-gray-100 md:h-10 md:text-3xl">
                            {rv.author.substring(0, 1).toUpperCase()}
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="text-lg text-gray-300 md:text-xl">
                          {rv.author}
                        </p>
                        <p className="mt-1 text-xs text-gray-400 md:text-sm">
                          On {`${nameMonth[month]} ${day}, ${year}`}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      &quot;
                      {rv.content.length > 300
                        ? `${rv.content.substring(0, 300)}...`
                        : rv.content}
                      &quot;
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default ReviewMovie;
