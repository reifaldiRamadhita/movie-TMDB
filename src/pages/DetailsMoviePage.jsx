import { useEffect } from "react";
import Navbar from "../components/layouts/Navbar";
import HeaderDetails from "../components/layouts/details/HeaderDetails";
import MainBodyDetails from "../components/layouts/details/MainBodyDetails";

function DetailsMovie() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="relative flex w-full flex-col items-end md:h-[2270px] lg:h-[2200px]">
      <Navbar />
      {/* bg img movie */}
      <HeaderDetails />

      {/* detail movie */}
      <MainBodyDetails />
    </div>
  );
}

export default DetailsMovie;
