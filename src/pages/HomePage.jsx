import HeaderHome from "../components/layouts/home/HeaderHome";
import MainBodyHome from "../components/layouts/home/MainBodyHome";
import Footer from "../components/layouts/Foooter";
import Navbar from "../components/layouts/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeaderHome />
      <MainBodyHome />
      <Footer />
    </>
  );
}

export default HomePage;
