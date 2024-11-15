// import { useContext } from "react";
// import { AuthContext } from "./../AuthProvider/AuthProvider";
// import { PropTypes } from "prop-types";
// import { Link, useNavigate } from "react-router-dom";

// function PrivateRoute({ children }) {
//   const { currentUser, loading } = useContext(AuthContext);
//   console.log(loading);
//   const navigate = useNavigate();
    
//   if (loading) {

//     return (
//       <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//         <div className="flex justify-center mb-4">
//           <div className="skeleton h-32 w-full"></div>
//         </div>
//         <div className="skeleton h-4 w-full"></div>
//         <div className="skeleton h-4 w-full"></div>
//         <div className="skeleton h-4 w-full"></div>
//         <div className="mt-4">
//           <div className="flex w-52 flex-col gap-4">
//             <div className="skeleton h-32 w-full"></div>
//             <div className="skeleton h-4 w-28"></div>
//             <div className="skeleton h-4 w-full"></div>
//             <div className="skeleton h-4 w-full"></div>
//           </div>
//         </div>
//         <div className="mt-6">
//           <div className="flex w-52 flex-col gap-4">
//             <div className="skeleton h-32 w-full"></div>
//             <div className="skeleton h-4 w-28"></div>{" "}
//             <div className="skeleton h-4 w-full"></div>{" "}
//             <div className="skeleton h-4 w-full"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (currentUser) {
//     return <>{children}</>;
//   }


//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f6f8] text-gray-800 p-6">
//       <h1 className="text-4xl font-bold text-[#0077B5] mb-4">Oops!</h1>
//       <Link
//         to="/"
//         className="bg-[#0077B5] text-white px-6 py-2 rounded-md shadow hover:bg-[#005983] transition-colors"
//       >
//         Home
//       </Link>
//     </div>
//   );
// }

// PrivateRoute.propTypes = {
//   children: PropTypes.node,
// };

// export default PrivateRoute;

import { useContext, useEffect } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { PropTypes } from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { currentUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to login page if user is not authenticated and not loading
  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/login"); // Replace "/login" with your actual login route
    }
  }, [loading, currentUser, navigate]);

  // Show loading skeleton while loading is true
  if (loading) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="skeleton h-32 w-full"></div>
        </div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="mt-4">
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  // If the user is authenticated, render the children
  if (currentUser) {
    return <>{children}</>
  }

  // This return block won't be reached due to the useEffect redirection
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f6f8] text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-[#0077B5] mb-4">Oops!</h1>
      <Link
        to="/"
        className="bg-[#0077B5] text-white px-6 py-2 rounded-md shadow hover:bg-[#005983] transition-colors"
      >
        Home
      </Link>
    </div>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
