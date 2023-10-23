import { Link } from "react-router-dom";

function SelectCategoryMovie({ idCategory, setIdCategory }) {
  return (
    <div className="mb-14 flex flex-wrap justify-center gap-2 md:mb-20 md:gap-x-3 lg:gap-x-5">
      <input
        id="action"
        type="radio"
        name="category"
        value="28"
        className="w-0"
        onClick={(e) => setIdCategory(e.target.value)}
        defaultChecked
      />
      <label
        htmlFor="action"
        className={`cursor-pointer rounded-full px-4 py-2 text-xs text-white md:text-sm ${
          idCategory === "28" && "bg-red-600"
        }`}
      >
        Action
      </label>

      <input
        id="adventure"
        type="radio"
        name="category"
        value="12"
        className="w-0"
        onClick={(e) => setIdCategory(e.target.value)}
      />
      <label
        htmlFor="adventure"
        className={`cursor-pointer rounded-full px-4 py-2 text-xs text-white md:text-sm ${
          idCategory === "12" && "bg-red-600"
        }`}
      >
        Adventure
      </label>

      <input
        id="animation"
        type="radio"
        name="category"
        value="16"
        className="w-0"
        onClick={(e) => setIdCategory(e.target.value)}
      />
      <label
        htmlFor="animation"
        className={`cursor-pointer rounded-full px-4 py-2 text-xs text-white md:text-sm ${
          idCategory === "16" && "bg-red-600"
        }`}
      >
        Animation
      </label>

      <input
        id="comedy"
        type="radio"
        name="category"
        value="35"
        className="w-0"
        onClick={(e) => setIdCategory(e.target.value)}
      />
      <label
        htmlFor="comedy"
        className={`cursor-pointer rounded-full px-4 py-2 text-xs text-white md:text-sm ${
          idCategory === "35" && "bg-red-600"
        }`}
      >
        Comedy
      </label>

      <Link
        to="/explore"
        className={`rounded-full border-2 border-gray-300 px-4 py-2 text-sm text-red-500`}
      >
        Explore Movie..
      </Link>
    </div>
  );
}

export default SelectCategoryMovie;
