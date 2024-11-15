import { useContext } from "react";
import { AuthContext } from "./../AuthProvider/AuthProvider";
import { PropTypes } from "prop-types";
import { Navigate, useLocation,  } from "react-router-dom";

function PrivateRoute({ children }) {
  const { currentUser, loading } = useContext(AuthContext);
 
 const location = useLocation();
 console.log(location)
    
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
            <div className="skeleton h-4 w-28"></div>{" "}
            <div className="skeleton h-4 w-full"></div>{" "}
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (currentUser && currentUser?.email) {
    return children;
  }


  return <Navigate state={location.pathname} to='/login'></Navigate>
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;

