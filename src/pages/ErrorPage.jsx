import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f6f8] text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-[#0077B5] mb-4">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm italic text-gray-600 mb-6">
        {error?.statusText || error?.message || "Something went wrong"}
      </p>

      <Link to="/" className="bg-[#0077B5] text-white px-6 py-2 rounded-md shadow hover:bg-[#005983] transition-colors">
        Home
      </Link>
    </div>
  );
}

export default ErrorPage;
