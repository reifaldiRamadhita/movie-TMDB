import { createContext, useState } from "react";

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [titleMovie, setTitleMovie] = useState("");

  return (
    <SearchContext.Provider value={{ titleMovie, setTitleMovie }}>
      {children}
    </SearchContext.Provider>
  );
}

export const InputSearchMovie = SearchContext;
export default SearchContextProvider;
