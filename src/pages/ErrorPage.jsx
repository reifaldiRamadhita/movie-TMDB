import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-gray-100 mb-3">Oops!</h1>
      <p className="text-gray-300 mb-1">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-gray-300 mb-1">
        <i>404 {error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
