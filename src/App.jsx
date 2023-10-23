import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getDetailsMovie,
  getSearchMovie,
  getTrandingMovies,
} from "./service/movie.service";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DetailsMovie from "./pages/DetailsMoviePage";
import SearchMoviePage from "./pages/SearchMoviePage";
import SearchContextProvider from "./context/searchContext";
import ExploreMovie from "./pages/ExploreMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    loader() {
      return getTrandingMovies()
        .then((resolve) => resolve)
        .catch((err) => console.error(err.message));
    },
  },
  {
    path: "/details/:detailsId",
    element: <DetailsMovie />,
    loader({ params }) {
      return getDetailsMovie(params.detailsId)
        .then((resolve) => resolve)
        .catch((err) => console.error(err.message));
    },
  },
  {
    path: "/search/:titleMovie",
    element: <SearchMoviePage />,
    loader({ params }) {
      return getSearchMovie(params.titleMovie)
        .then((resolve) => resolve)
        .catch((err) => console.error(err.message));
    },
  },
  {
    path: "/explore",
    element: <ExploreMovie />,
  },
]);

function App() {
  return (
    <SearchContextProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </SearchContextProvider>
  );
}

export default App;
