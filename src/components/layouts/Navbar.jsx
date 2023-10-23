import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 0 ? setBgNav(true) : setBgNav(false);
    };

    return () => {
      setBgNav(false);
    };
  }, []);
  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-12 w-full items-center justify-between px-5 md:h-16 md:px-10 lg:px-20 ${
        bgNav ? "backdrop-blur-md" : "bg-gradient-to-b from-dark/80 to-dark/0"
      }`}
    >
      <Link to="/">
        <h5 className="text-lg font-bold text-gray-100 md:text-2xl">
          React <span className="text-red-600">Movie</span>
        </h5>
      </Link>

      <ul className="flex gap-x-5">
        <li className="text-sm text-gray-300 md:text-base">
          <Link to="/explore">Explore Movie</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
